import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ev-landings.vercel.app",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [sitemap()],
});
