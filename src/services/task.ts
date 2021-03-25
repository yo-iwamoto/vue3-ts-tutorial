import axios from '@/services/axios'
import { store } from '@/services/store'
import { IndexResponse } from '@/types/task'

axios.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('Access-Token')
    if (accessToken) {
      config.headers.common['Access-Token'] = accessToken
    }
    return config
  }
)

export const index = () => {
  axios.get('/tasks').then((res: IndexResponse) => {
    store.setTasks(res.data.tasks)
  }).catch(err => {
    throw err
  })
}

export const create = async (name: string) => {
  axios.post('/tasks', { name: name }).then(() => {
    index()
  }).catch(err => {
    throw err
  })
}
