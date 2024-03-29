import { createApp, provide } from 'vue'
import App from '@/App.vue'
import { router } from '@/router'
import { store, key } from '@/services/store'
import { autoLogin } from '@/services/auth'

// TailwindCSSの適用
require('@/assets/stylesheets/index.css')

autoLogin()

createApp({
  ...App,
  setup () {
    // ルートコンポーネントでprovideすることで，全てのコンポーネントでinject可能に
    provide(key, store)
  }
})
  .use(
    router,
    store
  )
  .mount('#app')
