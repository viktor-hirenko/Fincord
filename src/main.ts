import { createApp } from 'vue'
import './style.css'
import './assets/lazyAnimation.scss'
import App from './App.vue'
import lazyAnimation from './directives/lazyAnimation'

const app = createApp(App)
app.directive('lazy-animate', lazyAnimation)
app.mount('#app')
