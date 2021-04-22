import axios from 'axios';

export default axios.create({
    baseURL : 'https://findbuddy-indiv-project.herokuapp.com/'
    // baseURL : 'http://localhost:3100'
});