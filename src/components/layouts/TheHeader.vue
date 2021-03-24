<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 bordergray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <img class="h-8 w-auto sm:h-10" src="images/logo.png" alt="ロゴ">
          </router-link>
        </div>

        <div v-if="isRegistered && !isAuthenticate" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <base-button link="/login" text-style>ログイン</base-button>
          <base-button link="/signup">新規登録</base-button>
        </div>

        <div v-else-if="isAuthenticate" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <base-button link="/login" border-style>ログアウト</base-button>
          <base-button link="/signup">アカウント</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs, inject } from 'vue'
import { key } from '@/services/store'
import BaseButton from '../objects/BaseButton'

export default defineComponent({
  components: {
    BaseButton
  },
  setup () {
    const store = inject(key)
    if (!store) {
      throw Error()
    }

    const state = reactive({
      isAuthenticate: store.state.isAuthenticate,
      isRegistered: store.state.isRegistered
    })

    const logout = store.logout

    return {
      ...toRefs(state),
      logout
    }
  }
})
</script>
