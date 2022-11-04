import { createApp } from 'vue'

// CSS reset
import 'normalize.css'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// element-icon
import ElementIcons from './plugins/element-icons'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// permission control
import './permission'

import './styles/index.scss'

const app = createApp(App)

app.use(ElementPlus)
app.use(ElementIcons)
app.use(router)
app.use(createPinia())
app.mount('#app')
