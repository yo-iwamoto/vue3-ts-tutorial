<template>
  <div>

    <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">ログイン</h1>
        <p class="text-gray-400 dark:text-gray-400">以下の情報を入力して、
          <br>「ログイン」を押してください。
        </p>
    </div>
    <div class="m-7 max-w-md mx-auto">

      <form @submit.prevent>

        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">メールアドレス</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@mailaddress.com"
            v-model="loginForm.email"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">パスワード</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            v-model="loginForm.password"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        </div>

        <div class="mb-6 text-center">
          <base-button link="" @click="onSubmit">ログイン</base-button>
        </div>

      </form>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from 'vue'
import { LoginForm } from '@/types/forms'
import { firebaseLogin } from '@/services/auth'
import { key } from '@/services/store'
import BaseButton from '@/components/objects/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  },
  setup () {
    const store = inject(key)
    if (!store) {
      throw Error()
    }

    const onSubmit = () => firebaseLogin(state.loginForm)

    const state = reactive<{ loginForm: LoginForm }>({
      loginForm: {
        email: '',
        password: ''
      }
    })

    return {
      ...toRefs(state),
      onSubmit
    }
  }
})
</script>
