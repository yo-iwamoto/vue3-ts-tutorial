import baseAxios from 'axios'

const axios = baseAxios.create({
  baseURL: 'https://leisurely-todo.herokuapp.com/api/v1'
  // baseURL: 'http://localhost:5000/api/v1'
})

export default axios
