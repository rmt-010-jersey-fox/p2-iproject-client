import axios from 'axios'
export default axios.create({
    baseURL: 'https://climate-news.herokuapp.com/'
})