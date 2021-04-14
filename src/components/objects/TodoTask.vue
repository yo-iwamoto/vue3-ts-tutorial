<template>
  <div class="flex mb-4 h-12 items-center border-b-2 border-gray-100">
    <p class="w-full text-grey-darkest">
      <slot></slot>
    </p>
    <div @click="destroy(id)">
      <trash-icon />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { destroy } from '@/services/task'
import TrashIcon from '@/components/objects/TrashIcon.vue'

type Props = {
  id: number;
  name: string;
  status: number;
}

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
  },
  setup (props: Props) {
    const state = reactive<{ id: number }>({
      id: props.id
    })

    return { ...toRefs(state), destroy }
  }
})
</script>
