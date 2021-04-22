import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
// 'http://localhost:3000'
// 'https://book-lovers-hansel.herokuapp.com'

export default instance
