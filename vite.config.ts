// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GH_PAGES=1 produces a fully static, prerendered build for GitHub Pages
// served under https://sooraj-7732.github.io/soorajsportfolio/
const isPages = process.env["GH_PAGES"] === "1";
const PAGES_BASE = "/soorajsportfolio/";

export default defineConfig(
  isPages
    ? {
        nitro: false,
        vite: { base: PAGES_BASE },
        tanstackStart: {
          server: { entry: "server" },
          router: { basepath: PAGES_BASE },
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
          pages: [{ path: "/" }, { path: "/resume" }],
        },
      }
    : {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
          // nitro/vite builds from this
          server: { entry: "server" },
        },
      },
);
