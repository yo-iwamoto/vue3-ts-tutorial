import { createApp, provide } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { store, key } from '@/services/store'

import VueCompositionAPI from '@vue/composition-api'

// TailwindCSSの適用
require('@/assets/stylesheets/index.css')

createApp({
  ...App,
  setup () {
    // ルートコンポーネントでprovideすることで，全てのコンポーネントでinject可能に
    provide(key, store)
  }
})
  .use(
    router,
    store,
    VueCompositionAPI
  )
  .mount('#app')
