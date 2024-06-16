import type { AstroIntegration } from "astro";
import fs from "fs";
import path from "path";

export default function astroKantor(): AstroIntegration {
  const configFilePath = "./kantor.config.mjs"; // Static path relative to the current file

  return {
    name: "kantor-site-config",
    hooks: {
      "astro:config:setup": async ({ injectScript }) => {
        try {
          const resolvedPath = path.resolve(configFilePath);

          if (!fs.existsSync(resolvedPath)) {
            throw new Error(`Config file not found at ${resolvedPath}`);
          }

          // Using dynamic import
          const configModule = await import(`file://${resolvedPath}`);
          const config = configModule.default || configModule; // Adjust if necessary

          if (Object.keys(config).length === 0) {
            throw new Error("Config file is empty");
          }

          injectScript(
            "page",
            `globalThis.siteConfig = ${JSON.stringify(config)};`,
          );

          console.log("Config loaded successfully");
        } catch (error: any) {
          console.error("Error loading config:", error.message);
          throw error; // Propagate the error to halt Astro setup if necessary
        }
      },
    },
  };
}

type NavItemKantorConfig = {
  label: string;
  href: string;
};

type KantorConfig = {
  title: string;
  description?: string;
  navItems: NavItemKantorConfig[];
  logo?: string;
};

export const defineConfig = (config: KantorConfig) => config;
