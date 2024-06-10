/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DB_PASSWORD: string;
  readonly PUBLIC_SITE_LANG: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
