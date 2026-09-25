# SillyTavern Model Icons for NanoGPT

Show the model creator's logo beside a SillyTavern message timestamp when the message was generated through NanoGPT. Other NanoGPT models keep their existing icon.

| Model ID prefix (case insensitive) | Icon |
| --- | --- |
| `xiaomi/` | Xiaomi |
| `z-ai/` | Z.ai |
| `deepseek/` | DeepSeek |
| `moonshotai/` | Moonshot AI |

## Install

In SillyTavern, open **Extensions → Install Extension** and enter:

```
https://github.com/User-Teixeira/SillyTavern-ModelIcons
```

Reload SillyTavern after installing. The extension applies to existing messages with stored NanoGPT API and model metadata, as well as new messages. It respects SillyTavern's Model Icons visibility setting.

The replacement icon is 14 × 14 CSS pixels, matching SillyTavern's standard `.icon-svg` height. Xiaomi and DeepSeek retain the asset colors; Z.ai and Moonshot AI follow the timestamp text color for light and dark themes.

## Logo credits

See [SOURCES.txt](SOURCES.txt) and [LICENSE-LobeHub.txt](LICENSE-LobeHub.txt). These vector logo renditions come from third-party icon libraries and are not claimed to be official files distributed by the companies.
