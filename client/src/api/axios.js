import axios from 'axios';
export default axios.create({
    // baseURL: 'https://kanbans-app.herokuapp.com/' // Production
    baseURL: 'http://localhost:3000' // Development
})