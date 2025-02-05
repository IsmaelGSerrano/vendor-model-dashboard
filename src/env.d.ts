/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BLOB_SAS_TOKEN?: string;
  readonly VITE_STORAGE_ACCOUNT?: string;
  readonly VITE_CONTAINER_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}