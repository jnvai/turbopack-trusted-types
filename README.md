# Turbopack: client navigation fails under `require-trusted-types-for 'script'`

The reproduction template plus one CSP header (`next.config.ts`):
`script-src 'self' 'unsafe-inline'; require-trusted-types-for 'script'`.

```sh
pnpm install
pnpm build && pnpm start          # Turbopack
```

Open http://localhost:3000, open the console and click "Go to /other".

- **Turbopack:** `This document requires 'TrustedScriptURL' assignment. The action has been blocked.` from
  `_next/static/chunks/turbopack-*.js`, then `Failed to fetch RSC payload for …/other. Falling back to browser
  navigation. TypeError: Failed to set the 'src' property on 'HTMLScriptElement'` (in `loadChunkCached`). The page is
  reached only by a full reload.
- **webpack** (`pnpm build:webpack && pnpm start`): client navigation, no error.

Tested with next 16.5.0-canary.41, Chromium.
