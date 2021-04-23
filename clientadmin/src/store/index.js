import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/index'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    room: {}
  },
  mutations: {
    setRooms (commit, payload) {
      this.state.rooms = payload
    },
    setRoom (commit, payload) {
      this.state.room = payload
      // console.log(payload, 'MASUUUUKKK<<<<<<<<<')
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      }).then(response => {
        console.log(response)
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/')
      }).catch(err => {
        console.log(err)
      })
    },
    fetchRoom (context) {
      axios({
        method: 'GET',
        url: '/rooms',
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(response => {
        context.commit('setRooms', response.data.room)
        // console.log(response.data.room)
      }).catch(err => {
        console.log(err)
      })
    },
    deleteRoom (context, payload) {
      axios({
        method: 'DELETE',
        url: `/rooms/${payload}`,
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(response => {
        // console.log(payload)
        this.dispatch('fetchRoom')
      }).catch(err => {
        console.log(err)
      })
    },
    add (context, payload) {
      axios({
        method: 'POST',
        url: '/rooms',
        headers: { access_token: localStorage.getItem('access_token') },
        data: payload
      }).then(response => {
        this.dispatch('fetchRoom')
      }).catch(err => {
        console.log(err)
      })
    },
    editRoom (context, payload) {
      // console.log(payload, 'wow')
      axios({
        method: 'GET',
        url: `/rooms/${payload}`,
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(response => {
        context.commit('setRoom', response.data.room)
        // console.log(response.data.room, 'wkkwokwokwo')
      }).catch(err => {
        console.log(err)
      })
    },
    Edit (context, payload) {
      axios({
        method: 'PUT',
        url: `/rooms/${payload}`,
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(response => {
        console.log(response, 'wkwkwkwk')
        this.dispatch('fetchRoom')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
