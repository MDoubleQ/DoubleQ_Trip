import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index'
import 'normalize.css'
import './assets/css/index.css'

createApp(App).use(router).use(store).mount('#app')
