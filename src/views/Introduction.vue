<template>
  <h1 class="text-3xl text-center my-10 text-gray-600">{{ welcomeMessage }}</h1>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { reactive, inject, toRefs } from 'vue'
import { key } from '@/services/store'

export default defineComponent({
  setup () {
    const store = inject(key)
    let message = 'not logged in'
    if (store.state.loggedIn) {
      message = 'You are logged In!'
    }
    const state = reactive({
      welcomeMessage: message
    })
    return toRefs(state)
  }
})
</script>
