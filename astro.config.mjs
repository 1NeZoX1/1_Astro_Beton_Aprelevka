import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://beton-zavod-aprelevka.ru",
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
