const axios = require('axios')

export default axios.create({
  baseURL: 'https://pixelates.herokuapp.com'
})
