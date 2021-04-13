<template>
  <router-link v-if="link" :to="link" :class="style">
    <slot></slot>
  </router-link>

  <button v-else :class="style">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface Props {
  link: string;
  textStyle: boolean;
  borderStyle: boolean;
}

export default defineComponent({
  props: {
    link: {
      type: String,
      default: '/'
    },
    textStyle: {
      type: Boolean,
      default: false
    },
    borderStyle: {
      type: Boolean,
      default: false
    }
  },
  setup (props: Props) {
    let style = 'transition-colors ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-300 hover:bg-yellow-400'
    if (props.textStyle) {
      style = 'whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
    } else if (props.borderStyle) {
      style = 'transition-colors ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-yellow-300 rounded-md shadow-sm text-base font-medium text-yellow-300 hover:bg-yellow-50'
    }

    const state = reactive<{link: string; style: string;}>({
      link: props.link,
      style: style
    })

    return toRefs(state)
  }
})
</script>
