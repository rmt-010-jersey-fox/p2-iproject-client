import axios from 'axios'

const result = axios.create({
  baseURL: 'http://localhost:3000'
})

export default result
