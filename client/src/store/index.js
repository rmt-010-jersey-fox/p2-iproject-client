import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../api/axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: localStorage.isLoggedIn,
    wastes: [],
    userWastes: [],
    name: localStorage.name,
    airQuality: {},
    weather: {}
  },
  mutations: {
    SETLOGIN (state, payload) {
      state.isLoggedIn = payload.status
    },
    SETNAME (state, payload) {
      state.name = payload.name
    },
    SETWASTES (state, payload) {
      state.wastes = payload.wastes
    },
    SETUSERWASTES (state, payload) {
      state.userWastes = payload.userWastes
    },
    SETAIRQ (state, payload) {
      state.airQuality = { rawData: payload.rawData, converted: payload.converted }
    },
    SETWEATHER (state, payload) {
      state.weather = { weather: payload.weather, location: payload.location }
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('isLoggedIn', true)
          localStorage.setItem('name', res.data.name)
          context.commit('SETLOGIN', { status: true })
          context.commit('SETNAME', { name: res.data.name })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged In',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Home' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email/password!'
          })
          console.log(err)
        })
    },

    googleLogin (context, payload) {
      const idToken = payload.idToken
      axios({
        method: 'POST',
        url: '/googlelogin',
        data: {
          id_token: idToken
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('isLoggedIn', true)
          localStorage.setItem('name', res.data.name)
          context.commit('SETLOGIN', { status: true })
          context.commit('SETNAME', { name: res.data.name })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged In',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Home' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email/password!'
          })
          console.log(err)
        })
    },

    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registered',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    logout (context) {
      localStorage.clear()
      context.commit('SETLOGIN', { status: false })
      router.push({ name: 'Login' })
    },

    getWastes (context) {
      axios({
        method: 'GET',
        url: '/wastes',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('SETWASTES', { wastes: res.data })
        })
        .catch(err => {
          console.log(err)
        })
    },

    getUserWastes (context) {
      axios({
        method: 'GET',
        url: '/saldo',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('SETUSERWASTES', { userWastes: res.data })
        })
        .catch(err => {
          console.log(err)
        })
    },

    addWaste (context, payload) {
      axios({
        method: 'POST',
        url: '/saldo',
        data: {
          WasteId: payload.WasteId,
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.dispatch('getUserWastes')
        })
        .catch(err => {
          console.log(err)
        })
    },

    updateWaste (context, payload) {
      axios({
        method: 'PATCH',
        url: '/saldo/' + payload.WasteId,
        data: {
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.dispatch('getUserWastes')
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteWaste (context, payload) {
      axios({
        method: 'DELETE',
        url: '/saldo/' + payload.WasteId,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.dispatch('getUserWastes')
        })
        .catch(err => {
          console.log(err)
        })
    },

    deposit (context) {
      axios({
        method: 'PATCH',
        url: '/saldo/deposit',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.dispatch('getUserWastes')
        })
        .catch(err => {
          console.log(err)
        })
    },

    airQuality (context) {
      axios({
        method: 'GET',
        url: '/airQuality'
      })
        .then(res => {
          console.log(res)
          context.commit('SETAIRQ', { rawData: res.data.data.current.pollution, converted: res.data.converted })
          context.commit('SETWEATHER', { weather: res.data.data.current.weather, location: res.data.data.city })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})

export default store
