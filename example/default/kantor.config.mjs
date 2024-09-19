import { defineConfig } from "./packages/astro-kantor/defineConfig";

export default defineConfig({
  title: "Kantor",
  description: "Kantor",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],
});
