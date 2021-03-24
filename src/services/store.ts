import { InjectionKey, reactive, readonly } from 'vue'
import { Store } from '@/types/store'

const state = reactive({
  loggedIn: false
})

const login = () => {
  state.loggedIn = true
}

const logout = () => {
  state.loggedIn = false
}

export const store = {
  state: readonly(state),
  login,
  logout
}

export const key: InjectionKey<Store> = Symbol('key')
