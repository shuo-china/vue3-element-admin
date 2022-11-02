import { createApp } from 'vue'

// CSS reset
import 'normalize.css'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// permission control
import './permission'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
