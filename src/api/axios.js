import axios from 'axios'
export default axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://my-book-server.herokuapp.com/'
})