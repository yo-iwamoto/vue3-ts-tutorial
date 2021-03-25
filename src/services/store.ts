import { InjectionKey, reactive, readonly } from 'vue'
import { Store } from '@/types/store'
import { Task } from '@/types/task'

const state = reactive({
  isRegistered: !!localStorage.getItem('Access-Token'),
  isAuthenticate: false,
  tasks: [{}]
})

const login = (): void => {
  state.isAuthenticate = true
}

const logout = (): void => {
  state.isAuthenticate = false
}

const register = (): void => {
  state.isRegistered = true
}

const setTasks = (newTasks: Task[]): void => {
  state.tasks = newTasks
}

export const store = {
  state: readonly(state),
  login,
  logout,
  register,
  setTasks
}

export const key: InjectionKey<Store> = Symbol('key')
