import axios from 'axios'
const baseURL = 'http://localhost:3000'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://covid19-details-news.herokuapp.com'
}
export default axios.create({
  baseURL
})
