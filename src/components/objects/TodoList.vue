<template>
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-8">
        <h1 class="text-grey-darkest">TODO リスト</h1>
        <div class="flex mt-4">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo">
          <todo-button buttonType="add" />
        </div>
      </div>
      <div>
        <todo-task>起きる</todo-task>
        <todo-task>寝る</todo-task>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { inject, reactive, toRefs, onMounted } from 'vue'
import { index } from '@/services/task'
import { Task } from '@/types/task'
import { key } from '@/services/store'
import TodoTask from '@/components/objects/TodoTask.vue'
import TodoButton from '@/components/objects/TodoButton.vue'

export default defineComponent({
  components: {
    TodoButton,
    TodoTask
  },
  setup () {
    const store = inject(key)

    const state = reactive<{tasks: Task[]}>({
      tasks: []
    })

    onMounted(() => {
      index()
    })
  }
})
</script>
