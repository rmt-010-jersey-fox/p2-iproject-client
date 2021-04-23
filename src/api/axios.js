import axios from 'axios'

export default axios.create({
  baseURL: 'https://qurantara-server.herokuapp.com/'
  // baseURL: 'http://localhost:3000/'
})
