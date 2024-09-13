import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: '/verbiq-landing/'
  integrations: [
    icon({
      include: {
        ri: ["*"],
        mage: ["*"],
      },
    }),
  ],
});
