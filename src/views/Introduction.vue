<template>
  <h1 class="text-3xl text-center my-10 text-gray-600">Leisurelyは、あなたを忙しさから解放します。</h1>
  <div class="text-center">
    <base-button link="" @click="register">はじめる</base-button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { inject } from 'vue'
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

    const register = () => {
      // サーバーでユーザーを作成，res.data.uidをlocalStorageに保存
      store.register()
      router.push('/')
    }
    return { register }
  }
})
</script>
