import { createApp } from 'vue'
import './style.css'
import './assets/lazyAnimation.scss'
import App from './App.vue'
import router from './router'
import lazyAnimation from './directives/lazyAnimation'
import { initGTM } from './composables/useAnalytics'

initGTM()

const app = createApp(App)
app.directive('lazy-animate', lazyAnimation)
app.use(router)
app.mount('#app')
