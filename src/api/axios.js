import axios from 'axios'

export default axios.create({
  baseURL: 'https://tournagen-server.herokuapp.com/'
});
