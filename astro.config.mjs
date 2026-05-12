import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ev-landings.vercel.app",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
