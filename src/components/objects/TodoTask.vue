<template>
  <div class="flex mb-4 h-12 items-center border-b-2 border-gray-100">
    <p class="w-full text-grey-darkest">
      <slot></slot>
    </p>
    <trash-icon></trash-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Task } from '@/types/task'
import TrashIcon from '@/components/objects/TrashIcon.vue'

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      required: true
    }
  },
  components: {
    TrashIcon
  }
})
</script>
