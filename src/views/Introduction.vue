<template>
  <div class="text-center">
    <h1 class="text-3xl text-center my-10 text-gray-600">Leisurelyは、より快適にタスクを解消するためのアプリです。</h1>
    <div class="text-center">
      <base-button link="" @click="register">はじめる</base-button>
    </div>
    <div class="theme-image w-80 h-80 bg-no-repeat mx-auto"></div>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue'
import { key } from '@/services/store'
import { useRouter } from 'vue-router'
import { createUser } from '@/services/auth'
import BaseButton from '@/components/objects/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  },
  setup () {
    const router = useRouter()
    const store = inject(key)
    if (!store) {
      throw Error()
    }

    const register = () => {
      if (!store.state.isRegistered) {
        createUser()
      } else {
        router.push('/')
      }
    }
    return { register }
  }
})
</script>

<style lang="scss" scoped>
.theme-image {
  background-image: url('/images/ill_blank.png');
  background-position: center;
  background-size: contain;
}
</style>
