<template>
  <the-header />
  <div class="flex items-center">
    <div class="container mx-auto">
      <div class="mx-auto my-10 p-5 rounded-md">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TheHeader from '@/components/layouts/TheHeader.vue'

export default defineComponent({
  components: {
    TheHeader
  }
})
</script>
