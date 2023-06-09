import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import './index.css'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)
app.use(store)

app.provide('axios', app.config.globalProperties.axios)
app.provide('router', router)

app.mount('#app')
