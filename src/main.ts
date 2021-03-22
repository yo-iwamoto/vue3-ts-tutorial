import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import CompositionApi from '@vue/composition-api'

// TailwindCSSの適用
require('./assets/stylesheets/index.css')

const app = createApp(App)
app.use(
  router,
  store,
  CompositionApi
)
app.mount('#app')
