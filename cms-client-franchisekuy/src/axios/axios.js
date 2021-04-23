import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://franschise-kuy.herokuapp.com'


})

export default instance