import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), partytown(), tailwind(), mdx()],
  output: "server",
  adapter: vercel(),
});
