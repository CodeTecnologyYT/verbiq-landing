import { defineConfig } from "astro/config";
import github from "@astrojs/github";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  adapter: github(),
  integrations: [
    icon({
      include: {
        ri: ["*"],
        mage: ["*"],
      },
    }),
  ],
});
