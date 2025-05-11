import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
    $setLocale: (locale: string) => void
  }
}

// Определение типа для window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}