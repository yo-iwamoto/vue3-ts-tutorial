<template>
  <h1 class="text-3xl text-center my-10 text-gray-600">{{ loginStatus }}</h1>
  <div class="text-center">
    <base-button link="" @click="register">はじめる</base-button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, inject, toRefs } from 'vue'
import { key } from '@/services/store'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/objects/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  },
  setup () {
    const router = useRouter()
    const store = inject(key)
    let message = 'not logged in'
    if (store.state.isAuthenticate) {
      message = 'You are logged In!'
    }
    const state = reactive({
      loginStatus: message
    })

    const register = () => {
      // サーバーでユーザーを作成，res.data.uidをlocalStorageに保存
      store.register()
      router.push('/')
    }
    return {
      ...toRefs(state),
      register
    }
  }
})
</script>
