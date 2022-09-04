import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import robotsTxt from "astro-robots-txt";
import prefetch from "@astrojs/prefetch";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  site: "https://gdsc-loyola-website.vercel.app/",
  integrations: [
    tailwind(),
    image(),
    sitemap(),
    solidJs(),
    robotsTxt(),
    prefetch(),
    partytown({
      config: {
        forward: ["umami.trackEvent"],
      },
    }),
  ],
});
