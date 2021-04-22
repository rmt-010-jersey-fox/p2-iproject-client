import axios from 'axios'
let baseURL = 'https://covid19-details-news.herokuapp.com'
// if (process.env.NODE_ENV === 'production') {
//   baseURL = 'https://covid19-details-news.herokuapp.com'
// }
export default axios.create({
  baseURL
})
