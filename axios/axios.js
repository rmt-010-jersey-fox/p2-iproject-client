import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://myfplhelper.herokuapp.com'
})

export default instance
