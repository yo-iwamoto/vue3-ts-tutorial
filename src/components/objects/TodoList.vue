<template>
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-8">
        <h1 class="text-grey-darkest">TODO リスト</h1>
        <div class="flex mt-4">
          <input v-model="newName" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo">
          <div class="inline-block" @click="onSubmit">
            <todo-button buttonType="add" />
          </div>
        </div>
      </div>
      <div>
        <todo-task
          v-for="task in tasks"
          :key="task.id"
          :id="task.id"
          :name="task.name"
          :status="task.status"
          >{{ task.name }}</todo-task>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { inject, reactive, toRefs, onMounted, computed } from 'vue'
import { index, create } from '@/services/task'
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
    if (!store) {
      throw Error
    }

    const state = reactive<{newName: string}>({
      newName: ''
    })

    const tasks = computed<Task[]>(() => store.state.tasks)

    onMounted(() => {
      index()
    })

    const onSubmit = () => {
      if (state.newName) {
        create(state.newName)
        state.newName = ''
      }
    }
    return {
      ...toRefs(state),
      tasks,
      onSubmit
    }
  }
})
</script>
