import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/API/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    weather: {
      city: 'Jakarta',
      weather: '',
      temp: '',
      ampm: ''
    },
    userName: '',
    addTrip: 'not yet',
    userTrip: []
  },
  mutations: {
    pushMessage (state, payload) {
      state.messages.push(payload)
    },

    setWeather (state, payload) {
      state.weather.weather = ''
      payload.weather.forEach(e => {
        state.weather.weather = e.main
      })

      state.weather.temp = (payload.main.temp - 273.15).toFixed(1)

      state.weather.city = payload.name

      state.weather.time = new Date()

      const ampm = state.weather.time.getHours() >= 12 ? 'pm' : 'am'
      state.weather.ampm = ampm
    },

    setUserName (state, payload) {
      state.userName = payload.username
      localStorage.setItem('username', payload.username)
    },

    addTripStat (state, payload) {
      state.addTrip = payload.addTrip
    },

    setUserTrips (state, payload) {
      state.userTrips = payload
    }
  },
  actions: {
    goRegister (context, payload) {
      axios.post('/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    goLogin (context, payload) {
      axios.post('/login', {
        email: payload.email,
        password: payload.password
      })
        .then(({ data }) => {
          context.commit('setUserName', data)
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getWeather (context, payload) {
      axios.get(`/weathers/${payload.city}`, {
      })
        .then(({ data }) => {
          console.log(data)

          context.commit('setWeather', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    goAddTrip (context, payload) {
      axios.post('/trips', {
        title: payload.title,
        origin: payload.origin,
        destination: payload.destination,
        depatureDate: payload.depatureDate
      })
        .then(({ data }) => {
          console.log(data, '<<<<<<<<<<<<<<<')
          context.commit('addTripStat', { addTrip: 'success' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    showAllTrips (context) {
      axios.get('/trips')
        .then(({ data }) => {
          console.log(data)
          context.commit('setUserTrips', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
