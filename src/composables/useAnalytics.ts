/**
 * GA4 через Google Tag Manager.
 *
 * Архитектура GTM-first: код лишь пушит семантические события в
 * `window.dataLayer`. Конфигурация GA4-тегов, триггеров и конверсий
 * настраивается в интерфейсе GTM.
 *
 * Measurement ID GA4 в коде не хранится — только GTM Container ID
 * в переменной окружения `VITE_GTM_ID`. Без неё аналитика молча
 * отключена (удобно для локальной разработки).
 */

const GTM_ID = import.meta.env.VITE_GTM_ID

let _initialized = false

/** Тип ссылки CTA — используется для выделения конверсий в GTM/GA4. */
export type CtaLinkType =
  | 'contact'
  | 'blog'
  | 'hiring'
  | 'social'
  | 'internal'
  | 'external'
  | 'mailto'
  | 'tel'

export interface CtaClickParams {
  /** Секция интерфейса, например `header`, `hero`, `about`, `footer`. */
  cta_location: string
  /** Видимый текст кнопки/ссылки. */
  cta_label: string
  /** Целевой URL (href / to). */
  link_url?: string
  /** Тип ссылки. Если не задан — определяется автоматически по `link_url`. */
  link_type?: CtaLinkType
  /** Домен внешней ссылки. Заполняется автоматически для http(s). */
  target_domain?: string
  [key: string]: unknown
}

function isEnabled(): boolean {
  return !!GTM_ID && typeof window !== 'undefined'
}

function push(payload: Record<string, unknown>): void {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
  if (import.meta.env.DEV) {
    console.log(`[analytics] ${String(payload.event)}`, payload)
  }
}

/** Автоматическая классификация ссылки по URL под домены Fincord. */
export function classifyLinkType(href: string | undefined): CtaLinkType {
  if (!href) return 'internal'
  if (/^mailto:/i.test(href)) return 'mailto'
  if (/^tel:/i.test(href)) return 'tel'
  if (/#contact|\/contact/i.test(href)) return 'contact'
  if (/\/hiring/i.test(href)) return 'hiring'
  if (/\/blog/i.test(href)) return 'blog'
  if (/(linkedin|twitter|x\.com|facebook|instagram|t\.me|telegram|youtube|tiktok)/i.test(href))
    return 'social'
  if (/^https?:\/\//i.test(href)) return 'external'
  return 'internal'
}

function tryGetHostname(href: string): string | undefined {
  try {
    return new URL(href, window.location.origin).hostname
  } catch {
    return undefined
  }
}

/**
 * Однократная инициализация GTM: программно подгружает контейнер.
 * Вызывается в `main.ts` до монтирования приложения.
 *
 * Consent Mode v2 (значения по умолчанию) выставляется раньше — в
 * инлайн-скрипте `index.html`, чтобы согласие было установлено до
 * загрузки контейнера.
 */
export function initGTM(): void {
  if (_initialized || !isEnabled()) return
  _initialized = true

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)
}

export function useAnalytics() {
  /** Универсальная отправка события в dataLayer. */
  function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
    if (!isEnabled()) return
    push({ event: eventName, ...params })
  }

  /** Ручной page_view для SPA — вызывается в `router.afterEach`. */
  function trackPageView(path: string, title: string): void {
    if (!isEnabled()) return
    push({
      event: 'page_view',
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    })
  }

  /**
   * Трекинг клика по CTA.
   * Всегда шлёт `cta_click`. Для ключевых типов дополнительно шлёт
   * специализированное событие (`get_in_touch_click`, `blog_click`,
   * `social_click`) — их удобно помечать конверсиями в GA4.
   */
  function trackCtaClick(params: CtaClickParams): void {
    if (!isEnabled()) return

    const linkType = params.link_type ?? classifyLinkType(params.link_url)
    const enriched: Record<string, unknown> = {
      ...params,
      link_type: linkType,
      target_domain:
        params.target_domain ??
        (params.link_url?.startsWith('http') ? tryGetHostname(params.link_url) : undefined),
      page_path: window.location.pathname,
      page_title: document.title,
    }

    push({ event: 'cta_click', ...enriched })

    if (linkType === 'contact') {
      push({ event: 'get_in_touch_click', ...enriched })
    } else if (linkType === 'blog') {
      push({ event: 'blog_click', ...enriched })
    } else if (linkType === 'social') {
      push({ event: 'social_click', ...enriched })
    }
  }

  /**
   * Трекинг клика по соцсети. Задел на будущее: соцсетей на сайте пока
   * нет, при добавлении иконок достаточно вызвать этот метод в `@click`.
   */
  function trackSocialClick(network: string, href: string): void {
    if (!isEnabled()) return
    push({
      event: 'social_click',
      network,
      cta_location: 'social',
      cta_label: network,
      link_url: href,
      link_type: 'social',
      target_domain: tryGetHostname(href),
      page_path: window.location.pathname,
      page_title: document.title,
    })
  }

  return { trackEvent, trackPageView, trackCtaClick, trackSocialClick }
}
