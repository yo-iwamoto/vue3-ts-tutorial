import { InjectionKey, reactive, readonly } from 'vue'
import { Store } from '@/types/store'

const state = reactive({
  isRegistered: !!localStorage.getItem('Access-Token'),
  isAuthenticate: false
})

const login = (): void => {
  state.isAuthenticate = true
}

const logout = (): void => {
  state.isAuthenticate = false
}

export const store = {
  state: readonly(state),
  login,
  logout
}

export const key: InjectionKey<Store> = Symbol('key')
