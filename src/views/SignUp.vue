<template>
  <div class="flex items-center">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10 p-5 rounded-md">
        <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">新規登録</h1>
            <p class="text-gray-400 dark:text-gray-400">以下の情報を入力して、「次へ」を押してください。</p>
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
                v-model="signupForm.email"
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
                v-model="signupForm.password"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>

            <div class="mb-6">
              <label for="password-confirmation" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">パスワード再入力</label>
              <input
                type="password"
                name="password"
                id="password-confirmation"
                placeholder="password"
                v-model="signupForm.passwordConfirmation"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>

            <div class="mb-6 text-center">
              <base-button link="" @click="onSubmit">登録</base-button>
            </div>
            <p class="text-base text-center text-gray-400">
            </p>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { reactive, toRefs, inject } from 'vue'
import { SignupForm } from '@/types/forms'
import { firebase } from '@/services/firebase'
import { useRouter } from 'vue-router'
import { key } from '@/services/store'
import BaseButton from '@/components/objects/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  },
  setup () {
    const router = useRouter()
    const store = inject(key)
    if (!store) {
      throw new Error()
    }
    const state = reactive<{signupForm: SignupForm}>({
      signupForm: {
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    })

    const signup = async (signupForm: SignupForm) => {
      try {
        const res = await firebase.auth().createUserWithEmailAndPassword(
          signupForm.email,
          signupForm.password
        )
        const user = res.user
        if (user) {
          store.login()
          router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    }

    const onSubmit = () => {
      if (
        state.signupForm.password === state.signupForm.passwordConfirmation &&
        state.signupForm.email
      ) {
        signup(state.signupForm)
      } else {
        alert('入力情報をお確かめの上、再度お試しください。')
      }
    }

    return {
      onSubmit,
      ...toRefs(state)
    }
  }
})
</script>
