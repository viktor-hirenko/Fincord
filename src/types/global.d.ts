import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
    $setLocale: (locale: string) => void
  }
}

// Определение типов для Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}