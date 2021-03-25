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
        <div class="flex mb-4 items-center">
          <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
          <trash-icon></trash-icon>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
          <trash-icon></trash-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TrashIcon from '@/components/objects/TrashIcon.vue'
import TodoButton from '@/components/objects/TodoButton.vue'

export default defineComponent({
  components: {
    TodoButton,
    TrashIcon
  }
})
</script>
