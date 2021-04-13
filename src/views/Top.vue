<template>
  <the-header />
  <div class="flex items-center">
    <div class="container mx-auto">
      <div class="mx-auto my-10 p-5 rounded-md">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/layouts/TheHeader.vue'

export default defineComponent({
  components: {
    TheHeader
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
