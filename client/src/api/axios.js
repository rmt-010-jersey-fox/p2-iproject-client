import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: 'https://hospital-system-by-dimas.herokuapp.com/'
})
