# Copilot / AI agent instructions — Night Wolf theme

Purpose: give a focused summary so an AI coding agent becomes productive editing or extending this theme.

- **Big picture (how themes are generated)**

  - Base colors: [source/colors/dark-colors.js](source/colors/dark-colors.js) exports a `colors` object of chroma-js color instances.
  - Syntax mapping: [source/syntax/dark.js](source/syntax/dark.js) maps semantic token names (e.g. `colors.string`, `colors.functionName`) onto the color palette.
  - Theme constructor: [source/dark.js](source/dark.js) exports a default function `function(colors)` that returns the VS Code theme token map (strings like `editor.background`). Use `.hex()` on chroma colors when building the returned object.
  - Variants: files under [source/variants/dark/](source/variants/dark/) (e.g. `dark-blue.js`) export `default function(colors)` and override/add `colors.principal*`, `colors.text`, `selection_*`, etc.
  - Orchestration: [theme-compiler.js](theme-compiler.js) dynamically imports the version, colors, syntax and each variant, composes them and writes JSON files into `themes/`. It also emits a `-noitalics` JSON by converting `fontStyle: 'italic'` to `normal` at stringify time.

- **How to run / developer workflows**

  - Install deps: `npm install` (project uses `chroma-js` and `prettier`). See [package.json](package.json).
  - Watch + develop: `npm run dev` (runs `node theme-compiler dev`) — `theme-compiler` uses `fs.watch` to recompile on file changes.
  - One-off build: `npm run prod` (runs `node theme-compiler prod`) or `npm run vscode:prepublish` prior to publishing.
  - Publish: `npm run pub-major|pub-minor|pub-patch` (wrappers around `vsce publish`).

- **Project-specific conventions and patterns**

  - Color objects are chroma instances (not hex strings). Theme constructors call `.hex()` where VS Code expects a string.
  - Naming patterns: `principal`, `principal_0..5`, `selection_0..4`, `syntaxBlue`, `syntaxRed`, `contrast`, `text`, `interBackground`, etc. Follow existing names when adding new mappings.
  - Mutating pipeline: each step mutates the same `colors` object: colors file → variant modifier → syntax modifier → theme constructor. Keep that mutation pattern when adding files.
  - All modules export `default function(...)` (ESM). Use top-level `export default` to be importable by `theme-compiler.js`.

- **Common tasks — examples**

  - Add a new variant: create `source/variants/dark/my-variant.js` exporting `export default function(colors){ /* set principal/text/selection_* */ return colors }`. Then run `npm run prod` or `npm run dev` to generate `themes/night-wolf-my-variant.json` and `-noitalics` variant.
  - Add a new syntax mapping: update [source/syntax/dark.js](source/syntax/dark.js) to add `colors.myNewToken = colors.syntaxPurple`.
  - Add a new theme version: create `source/<name>.js` exporting a constructor function that returns the VS Code token map (use [source/dark.js](source/dark.js) as the canonical example).

- **Important gotchas for automated edits**

  - Always maintain `export default function` signature and return the mutated `colors` object or final mapping as appropriate; otherwise `theme-compiler` import will fail.
  - When producing final theme values, call `.hex()` on chroma objects (the theme JSON must contain strings).
  - `theme-compiler.js` relies on runtime dynamic imports with cache-busting query params — avoid changing file names or non-JS extensions without updating the compiler.
  - The no-italics build is created by stringifying the theme and replacing `fontStyle: 'italic'` values; do not duplicate that behavior elsewhere.

- **Files to read first (quick jump)**
  - [theme-compiler.js](theme-compiler.js) — orchestration and compile/watch behavior
  - [source/dark.js](source/dark.js) — canonical theme constructor
  - [source/colors/dark-colors.js](source/colors/dark-colors.js) — base palette shapes
  - [source/syntax/dark.js](source/syntax/dark.js) — semantic token wiring
  - [source/variants/dark/dark-blue.js](source/variants/dark/dark-blue.js) — variant example

If anything here is unclear or you want more examples (e.g. a minimal variant template or a small test harness to validate generated JSON), tell me which part to expand.
