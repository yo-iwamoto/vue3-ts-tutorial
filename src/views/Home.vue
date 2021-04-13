<template>
  <div>
    <div class="center"></div>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { key } from '@/services/store'
import TodoList from '@/components/objects/TodoList.vue'

export default defineComponent({
  components: {
    TodoList
  },
  setup () {
    const store = inject(key)
    if (!store) {
      throw Error()
    }
  }
})
</script>
