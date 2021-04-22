import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/index'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    books: [],
    isLogin: false
  },
  mutations: {
    setRooms (commit, payload) {
      this.state.rooms = payload
    },
    setBookings (commit, payload) {
      this.state.books = payload
    },
    setLogin (coomit, payload) {
      this.state.isLogin = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/clogin',
        data: payload
      }).then(response => {
        context.commit('setLogin', true)
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/')
      }).catch(err => {
        console.log(err)
      })
    },
    fetchRoom (context) {
      axios({
        method: 'GET',
        url: '/rooms'
      }).then(response => {
        context.commit('setRooms', response.data.room)
        // console.log(response.data.room, 'wwwwwwwwwwwwwwww')
      }).catch(err => {
        console.log(err)
      })
    },
    booking (context, payload) {
      // console.log(payload, '<<<<<<<<<,')
      axios({
        method: 'POST',
        url: '/books',
        headers: { access_token: localStorage.getItem('access_token') },
        data: { RoomId: payload }
      }).then(response => {
        // console.log(response, '<<<<<<<<<<<<')
        this.dispatch('fetchBooking')
      }).catch(err => {
        console.log(err)
      })
    },
    fetchBooking (context) {
      axios({
        method: 'GET',
        url: '/books',
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(response => {
        console.log(response.data)
        context.commit('setBookings', response.data)
      }).catch(err => {
        console.log(err)
      })
    },
    isLogin (context) {
      if (localStorage.setItem.access_token) {
        context.commit('setLogin', true)
      } else {
        context.commit('setLogin', false)
      }
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    },

    Logout (context) {
      localStorage.clear()
    }
  },
  modules: {
  }
})
