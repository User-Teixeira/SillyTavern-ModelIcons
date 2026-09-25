# SillyTavern Model Icons for NanoGPT

Show the model creator's logo beside a SillyTavern message timestamp when the message was generated through NanoGPT. Other NanoGPT models keep their existing icon.

| Model ID prefix (case insensitive) | Icon |
| --- | --- |
| `xiaomi/` | Xiaomi |
| `z-ai/` | Z.ai |
| `deepseek/` | DeepSeek |
| `moonshotai/` | Moonshot AI |
| `minimax/` | MiniMax |

## Install

In SillyTavern, open **Extensions → Install Extension** and enter:

```
https://github.com/User-Teixeira/SillyTavern-ModelIcons
```

Reload SillyTavern after installing. The extension applies to existing messages with stored NanoGPT API and model metadata, as well as new messages. It respects SillyTavern's Model Icons visibility setting.

The replacement icon uses SillyTavern's `.icon-svg` sizing and aspect ratio. All five icons use the supplied SVG shapes as masks, so their color follows the timestamp text color in light and dark themes.

## Logo credits

See [SOURCES.txt](SOURCES.txt) and [LICENSE-LobeHub.txt](LICENSE-LobeHub.txt). The icon files were supplied by the repository owner; they are not claimed to be official files distributed by the companies.
