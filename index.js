const brands = ['xiaomi', 'z-ai', 'deepseek', 'moonshotai'];

function getBrand(title) {
    const match = /^nanogpt\s*-\s*([^\s/]+)\//i.exec(title);
    const prefix = match?.[1]?.toLowerCase();
    return brands.includes(prefix) ? prefix : null;
}

function updateIcons(messages = document.querySelectorAll('.mes')) {
    for (const message of messages) {
        const original = message.querySelector('.timestamp-icon:not(.nanogpt-brand-icon)');
        const replacement = message.querySelector('.nanogpt-brand-icon');
        const title = original?.getAttribute('title') ?? original?.querySelector('title')?.textContent ?? '';
        const brand = getBrand(title);

        // A swipe may replace the model icon without replacing the message node.
        if (!brand) {
            replacement?.remove();
            message.querySelectorAll('.nanogpt-brand-original').forEach(icon => icon.classList.remove('nanogpt-brand-original'));
            continue;
        }

        original.classList.add('nanogpt-brand-original');
        if (!replacement) {
            const icon = document.createElement('span');
            icon.className = 'icon-svg timestamp-icon nanogpt-brand-icon';
            icon.dataset.brand = brand;
            icon.title = title;
            original.after(icon);
        } else {
            if (replacement.dataset.brand !== brand) replacement.dataset.brand = brand;
            if (replacement.title !== title) replacement.title = title;
            if (replacement.previousElementSibling !== original) original.after(replacement);
        }
    }
}

let queued = false;
const pending = new Set();
const observer = new MutationObserver(records => {
    for (const record of records) {
        if (record.type === 'attributes') {
            const message = record.target.closest('.mes');
            if (message) pending.add(message);
            continue;
        }

        for (const node of [...record.addedNodes, ...record.removedNodes]) {
            if (node.nodeType !== Node.ELEMENT_NODE) continue;
            if (!node.matches('.mes, .timestamp-icon') && !node.querySelector('.timestamp-icon')) continue;
            const message = node.matches('.mes') ? node : record.target.closest('.mes');
            if (message) pending.add(message);
        }
    }

    if (!pending.size) return;
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
        queued = false;
        updateIcons(pending);
        pending.clear();
    });
});

function start() {
    updateIcons();
    observer.observe(document.querySelector('#chat') ?? document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['title'],
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
    start();
}
