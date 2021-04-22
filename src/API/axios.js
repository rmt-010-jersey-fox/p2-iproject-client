import axios from 'axios'

export default axios.create({
  baseURL: 'https://timetravelers.herokuapp.com',
  headers: {
    access_token: localStorage.access_token
  }
})
