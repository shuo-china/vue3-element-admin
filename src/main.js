import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss'
import installIcons from '@/icons'
import './permission'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(installElementPlus)
  .use(installIcons)
  .mount('#app')
