---
description: Copy a row's color, icon, and folder state and paste it onto other GameObjects.
---

# Copy & Paste Style

Once you have styled one GameObject the way you like (color, icon, folder flag), copying that styling to others takes one shortcut.

## Shortcuts

| Action | Shortcut |
| --- | --- |
| Copy style from selected GameObject | ++ctrl+shift+c++ (Windows/Linux), ++cmd+shift+c++ (macOS) |
| Paste style onto selected GameObject(s) | ++ctrl+shift+v++ (Windows/Linux), ++cmd+shift+v++ (macOS) |

The shortcuts are scoped to the Hierarchy window. They only fire when the Hierarchy has keyboard focus.

## What gets copied

The clipboard captures:

- **Color** (or "no color")
- **Icon** (built-in palette index, if one is set)
- **Folder flag** (whether the source is a virtualization folder)

It does **not** copy:

- **Notes.** These are usually GameObject-specific and would be wrong to duplicate.
- **Bookmarks.** Bookmarking the same GameObject twice would be meaningless.
- **Project icons.** The custom-texture icon path is treated as object-specific.

## Multi-paste

Select any number of GameObjects before pressing ++ctrl+shift+v++. The same clipboard contents get applied to every selected row.

## Clipboard scope

The clipboard is per-Unity-session. Closing Unity clears it. If you need a re-usable styling preset, save the styled GameObject as a prefab variant or template; the clipboard is for quick mid-edit copies.
