import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://anon-app-h8.herokuapp.com'
})

export default instance
