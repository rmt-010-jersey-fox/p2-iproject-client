import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors'
import router from '../router/index.js'

Vue.use(Vuex)
Vue.use(AxiosPlugin)

export default new Vuex.Store({
  state: {
    provinces: [],
    cities: [],
    destinationCities: [],
    tikiPrices: [],
    jnePrices: [],
    posPrices: []
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
    }
  },
  actions: {
    fetchOrigin (context) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/location'
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
        url: 'http://localhost:3000/ongkir',
        data: {
          origin,
          destination,
          weight,
          courier: 'jne'
        }
      })
        .then(res => {
          context.commit('setJNEOngkir', res.data)
          data.push(res.data)
          return axios({
            method: 'post',
            url: 'http://localhost:3000/ongkir',
            data: {
              origin,
              destination,
              weight,
              courier: 'pos'
            }
          })
        })
        .then(res => {
          context.commit('setPOSOngkir', res.data)
          data.push(res.data)
          return axios({
            method: 'post',
            url: 'http://localhost:3000/ongkir',
            data: {
              origin,
              destination,
              weight,
              courier: 'tiki'
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
        url: `http://localhost:3000/ongkir/${payload}`
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
        url: `http://localhost:3000/ongkir/${payload}`
      })
        .then(res => {
          context.commit('setDestinationCity', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
