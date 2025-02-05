/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BLOB_SAS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}