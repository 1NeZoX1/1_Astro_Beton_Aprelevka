import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com",
  output: "static",
  cacheDir: ".astro/cache",
  integrations: [sitemap()],
  vite: {
    cacheDir: ".astro/vite-cache",
    optimizeDeps: {
      noDiscovery: true,
      include: []
    }
  },
  build: {
    format: "directory"
  }
});
