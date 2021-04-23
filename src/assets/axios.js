import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://evening-thicket-03883.herokuapp.com/'
})

export default instance
