<template>
  <div class="flex mb-4 h-8 items-center">
    <p class="w-full text-grey-darkest">
      <slot></slot>
    </p>
    <trash-icon></trash-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TrashIcon from '@/components/objects/TrashIcon.vue'

export default defineComponent({
  components: {
    TrashIcon
  }
})
</script>
