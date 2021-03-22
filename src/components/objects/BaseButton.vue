<template>
  <router-link :to="link" :class="style">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs } from 'vue'

interface Props {
  link: string
  textStyle: boolean
}

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true
    },
    textStyle: {
      type: Boolean,
      default: false
    }
  },
  setup (props: Props) {
    let style = 'ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-300 hover:bg-yellow-400'
    if (props.textStyle) {
      style = 'whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
    }

    const state = reactive<{
      link: string
      style: string
    }>({
      link: props.link,
      style: style
    })

    return toRefs(state)
  }
})
</script>
