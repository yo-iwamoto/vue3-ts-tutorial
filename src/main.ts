import { createApp, provide } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { store, key } from '@/services/store'

import VueCompositionAPI from '@vue/composition-api'

// TailwindCSSの適用
require('@/assets/stylesheets/index.css')

const app = createApp({
  ...App,
  setup () {
    provide(key, store)
  }
})
  .use(
    router,
    store,
    VueCompositionAPI
  )
app.mount('#app')
