import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com",
  output: "static",
  integrations: [sitemap()],
  vite: {
    optimizeDeps: {
      exclude: ["aria-query", "axobject-query"]
    }
  },
  build: {
    format: "directory"
  }
});
