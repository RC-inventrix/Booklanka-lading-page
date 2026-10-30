# DM Sans (vendored webfont)

The project's primary font (`project_standards.md` §5.1). Vendored rather than
installed as an npm dependency so that the font is available offline, is
byte-identical across every machine and CI run, and cannot 404 in production.

| | |
|---|---|
| Source | `@fontsource-variable/dm-sans` **5.3.0** (npm) |
| Upstream | https://github.com/googlefonts/dm-fonts |
| Licence | SIL Open Font License 1.1 — see `LICENSE.txt` |
| Axis | `wght` 100–1000, variable |
| Subsets | `latin`, `latin-ext` — normal and italic |

Declared via `@font-face` at the top of `src/index.css` under the family name
**`DM Sans`**, which is what `tailwind.config.ts` `theme.fontFamily.sans`
resolves to. Italic is included because `XnTiptapEditor` can emit `<em>`.

## Updating

```bash
npm pack @fontsource-variable/dm-sans          # in a scratch dir
tar -xzf fontsource-variable-dm-sans-*.tgz
cp package/files/dm-sans-latin{,-ext}-wght-{normal,italic}.woff2 \
   src/frontend/src/assets/fonts/
cp package/LICENSE src/frontend/src/assets/fonts/LICENSE.txt
```

Then update the version in this file and in `project_standards.md` §5.1.
`pnpm check-standards` compares the two and fails the build if they disagree.
