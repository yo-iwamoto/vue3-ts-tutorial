import axios from 'axios'

const baseApi = axios.create({
  baseURL: '/api/v1'
})

export default baseApi
