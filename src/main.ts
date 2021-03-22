import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import VueCompositionAPI from '@vue/composition-api'

// TailwindCSSの適用
require('./assets/stylesheets/index.css')

const app = createApp(App)
app.use(
  router,
  store,
  VueCompositionAPI
)
app.mount('#app')
