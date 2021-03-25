<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 bordergray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/introduction">
            <img class="h-8 w-auto sm:h-10" src="images/logo.png" alt="ロゴ">
          </router-link>
        </div>

        <div v-if="!isRegistered && !isAuthenticate" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <base-button link="/login">ログイン</base-button>
        </div>

        <div v-else-if="isRegistered && !isAuthenticate" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <base-button link="/login" text-style>ログイン</base-button>
          <base-button link="/signup">新規登録</base-button>
        </div>

        <div v-else-if="isAuthenticate" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <base-button border-style @click="logout">ログアウト</base-button>
          <base-button link="/signup">アカウント</base-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { computed, inject, reactive, toRefs, watch } from 'vue'
import { key } from '@/services/store'
import { useRoute } from 'vue-router'
import BaseButton from '../objects/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  },
  setup () {
    const route = useRoute()
    const store = inject(key)
    if (!store) {
      throw Error()
    }

    const state = reactive<{isRegistered: boolean}>({
      isRegistered: store.state.isRegistered
    })

    watch(route, () => {
      state.isRegistered = store.state.isRegistered
    })

    const isAuthenticate = computed(() => store.state.isAuthenticate)

    const logout = () => {
      store.logout()
      localStorage.removeItem('Access-Token')
    }

    return {
      isAuthenticate,
      ...toRefs(state),
      logout
    }
  }
})
</script>
