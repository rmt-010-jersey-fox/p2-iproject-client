import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'
const baseURL = 'http://localhost:3000/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    provinces: [],
    cities: [],
    destinationCities: [],
    tikiPrices: [],
    jnePrices: [],
    posPrices: [],
    user: [],
    histories: [],
    item: ''
  },
  mutations: {
    setLocation (state, payload) {
      state.provinces = payload
    },
    setCity (state, payload) {
      state.cities = payload
    },
    setDestinationCity (state, payload) {
      state.destinationCities = payload
    },
    setPOSOngkir (state, payload) {
      state.posPrices = payload
    },
    setJNEOngkir (state, payload) {
      state.jnePrices = payload
    },
    setTIKIOngkir (state, payload) {
      state.tikiPrices = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setHistory (state, payload) {
      state.histories = payload
    },
    setItem (state, payload) {
      state.item = payload
    }
  },
  actions: {
    register (context, payload) {
      const { username, email, password, address } = payload
      axios({
        method: 'post',
        url: baseURL + 'register',
        data: {
          username,
          email,
          password,
          address
        }
      })
        .then((res) => {
          router.push('/login')
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'post',
        url: baseURL + 'login',
        data: {
          email,
          password
        }
      })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access_token)
          this.dispatch('fetchUser')
          router.push('/')
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    fetchUser (context) {
      console.log('masuk fetch')
      axios({
        method: 'get',
        url: baseURL + 'user',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((res) => {
          context.commit('setUser', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchOrigin (context) {
      axios({
        method: 'get',
        url: baseURL + 'location',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((res) => {
          console.log('masuk')
          context.commit('setLocation', res.data)
        })
        .catch(err => {
          console.log('gamasuk', err.message)
          console.log(err)
        })
    },
    fetchOngkir (context, payload) {
      const { origin, destination, weight } = payload
      const data = []
      axios({
        method: 'post',
        url: baseURL + 'ongkir',
        data: {
          origin,
          destination,
          weight,
          courier: 'jne'
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setJNEOngkir', res.data)
          data.push(res.data)
          return axios({
            method: 'post',
            url: baseURL + 'ongkir',
            data: {
              origin,
              destination,
              weight,
              courier: 'pos'
            },
            headers: {
              access_token: localStorage.access_token
            }
          })
        })
        .then(res => {
          context.commit('setPOSOngkir', res.data)
          data.push(res.data)
          return axios({
            method: 'post',
            url: baseURL + 'ongkir',
            data: {
              origin,
              destination,
              weight,
              courier: 'tiki'
            },
            headers: {
              access_token: localStorage.access_token
            }
          })
        })
        .then(res => {
          context.commit('setTIKIOngkir', res.data)
          data.push(res.data)
          console.log(data)
          router.push('/search')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCity (context, payload) {
      axios({
        method: 'get',
        url: baseURL + `ongkir/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setCity', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchDestinationCity (context, payload) {
      axios({
        method: 'get',
        url: baseURL + `ongkir/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setDestinationCity', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchHistories (context) {
      axios({
        method: 'get',
        url: baseURL + 'history',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          console.log(res.data)
          context.commit('setHistory', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addHistories (context, payload) {
      console.log('masuk add')
      const { item, price } = payload
      axios({
        method: 'post',
        url: baseURL + 'history',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          item,
          price
        }
      })
        .then(res => {
          console.log(res.data)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
