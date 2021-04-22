import axios from 'axios'

export default axios.create({
    baseURL: 'https://io-movie.herokuapp.com',
});