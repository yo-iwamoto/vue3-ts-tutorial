<template>
  <p v-if="done" class="flex-no-shrink text-center cursor-pointer inline-block transition-colors p-2 ml-4 mr-2 border-2 w-20 rounded hover:text-white text-green-300 border-green-300 hover:bg-green-300">完了</p>
  <p v-if="remove" class="flex-no-shrink text-center cursor-pointer inline-block transition-colors p-2 ml-4 mr-2 border-2 w-20 rounded hover:text-white text-red-300 border-red-300 hover:bg-red-300">削除</p>
  <p v-if="add" class="flex-no-shrink text-center cursor-pointer inline-block transition-colors p-2 ml-4 mr-2 border-2 w-20 rounded hover:text-white text-yellow-300 border-yellow-300 hover:bg-yellow-200">追加</p>
  <p v-if="notDone" class="flex-no-shrink text-center cursor-pointer inline-block transition-colors p-2 ml-4 mr-2 border-2 w-28 rounded hover:text-white text-blue-200 border-blue-200 hover:bg-blue-200">未完了</p>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs } from 'vue'

interface Props {
  buttonType: 'done' | 'remove' | 'add' | 'notDone'
}

export default defineComponent({
  props: {
    buttonType: {
      type: String,
      default: 'done'
    }
  },
  setup (props: Props) {
    const state = reactive({
      done: false,
      remove: false,
      add: false,
      notDone: false,
      type: props.buttonType
    })

    const type = state.type
    state[type] = true

    return toRefs(state)
  }
})
</script>
