import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://storm-veldora.herokuapp.com/'
})

export default instance
