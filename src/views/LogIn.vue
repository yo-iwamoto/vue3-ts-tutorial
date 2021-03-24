<template>
<div class="text-center">
    <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">ログイン</h1>
    <p class="text-gray-400 dark:text-gray-400">以下の情報を入力して、
      <br>「ログイン」を押してください。
    </p>
</div>
<div class="m-7">

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
      <base-button link="" @click="firebaseLogin(loginForm)">ログイン</base-button>
    </div>

  </form>

</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs, inject } from 'vue'
import { LoginForm } from '@/types/forms'
import { firebase } from '@/services/firebase'
import { key } from '@/services/store'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/objects/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  },
  setup () {
    const router = useRouter()
    const store = inject(key)
    if (!store) {
      throw Error()
    }

    const state = reactive<{ loginForm: LoginForm }>({
      loginForm: {
        email: '',
        password: ''
      }
    })

    const firebaseLogin = async (loginForm: LoginForm) => {
      try {
        const res = firebase.auth().signInWithEmailAndPassword(
          loginForm.email,
          loginForm.password
        )
        const user = (await res).user
        if (user) {
          store.login()
          router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    }

    return {
      ...toRefs(state),
      firebaseLogin
    }
  }
})
</script>
