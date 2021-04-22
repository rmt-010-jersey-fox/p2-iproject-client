import axios from 'axios'

const instance = axios.create({
  baseURL: `https://book-lovers-hansel.herokuapp.com`
})
// 'http://localhost:3000'
// `https://book-lovers-hansel.herokuapp.com`

export default instance
