import baseAxios from 'axios'

const axios = baseAxios.create({
  baseURL: 'https://yo-express-todo-back.herokuapp.com/api/v1'
  // baseURL: 'http://localhost:5000/api/v1'
  // headers: {
  //   'Access-Control-Allow-Origin': '*'
  // }
})

export default axios
