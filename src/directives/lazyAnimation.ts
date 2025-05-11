import type { DirectiveBinding, ObjectDirective } from 'vue'

interface LazyAnimationOptions {
  delay?: number
  root?: Element | null
  rootMargin?: string
  threshold?: number
}

interface LazyAnimationHTMLElement extends HTMLElement {
  _observer?: IntersectionObserver
  _timeout?: number
}

const defaultOptions: LazyAnimationOptions = {
  delay: 0,
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const lazyAnimation: ObjectDirective = {
  mounted(el: LazyAnimationHTMLElement, binding: DirectiveBinding) {
    const options = {
      ...defaultOptions,
      ...(binding.value || {})
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Установка задержки перед анимацией
          el._timeout = window.setTimeout(() => {
            el.classList.add('lazy-animate')
          }, options.delay || 0)
          
          // Отключаем наблюдение после появления
          if (el._observer) {
            el._observer.disconnect()
            el._observer = undefined
          }
        }
      })
    }, {
      root: options.root,
      rootMargin: options.rootMargin,
      threshold: options.threshold
    })

    el._observer = observer
    observer.observe(el)

    // Установка начальных стилей
    el.classList.add('lazy-hidden')
  },
  unmounted(el: LazyAnimationHTMLElement) {
    // Очистка
    if (el._observer) {
      el._observer.disconnect()
      el._observer = undefined
    }
    
    if (el._timeout) {
      window.clearTimeout(el._timeout)
    }
  }
}

export default lazyAnimation 