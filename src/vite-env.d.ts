/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** GTM Container ID, например `GTM-XXXXXXX`. Без него аналитика отключена. */
  readonly VITE_GTM_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
