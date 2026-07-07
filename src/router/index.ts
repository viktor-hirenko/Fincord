import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { useAnalytics } from '../composables/useAnalytics'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hiring',
    name: 'Hiring',
    component: () => import('../views/Hiring.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: () => import('../views/CookiePolicy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // учитываем высоту хедера
      }
    }
    return { top: 0 }
  }
})

// Ручной page_view для SPA (авто-page_view в GA4-теге GTM отключён)
router.afterEach((to) => {
  useAnalytics().trackPageView(to.fullPath, document.title)
})

export default router 