import { createApp } from 'vue'
import './style.css'
import './assets/lazyAnimation.scss'
import App from './App.vue'
import router from './router'
import lazyAnimation from './directives/lazyAnimation'

const app = createApp(App)
app.directive('lazy-animate', lazyAnimation)
app.use(router)
app.mount('#app')
