<template>
  <div class="center"></div>
  <h1 class="text-3xl text-center text-gray-600">ホーム</h1>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { key } from '@/services/store'

export default defineComponent({
  setup () {
    const router = useRouter()
    const store = inject(key)
    if (!store) {
      throw Error()
    }
  }
})
</script>
