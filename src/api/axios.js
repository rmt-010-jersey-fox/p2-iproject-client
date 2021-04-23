import axios from 'axios'
export default axios.create({
    baseURL: 'https://forum-games.herokuapp.com'
    // baseURL: 'http://localhost:3000'
})