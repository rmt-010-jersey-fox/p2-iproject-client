import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {},
    cats: [],
    wsChat: [],
    activeUser: [],
    rooms: []
  },
  mutations: {
    updateUserProfile (state, payload) {
      state.userProfile = payload
    },
    updateUserCats (state, payload) {
      state.cats = payload
    },
    pushChat (state, payload) {
      state.wsChat.push(payload)
    },
    activeUser (state, payload) {
      state.activeUser = payload
    },
    getRooms (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    register (context, payload) {
      const { username, email, password, roomName } = payload
      console.log(roomName, 'output')
      return axios.post('/register', { username, email, password, roomName })
    },
    async login (context, payload) {
      const { email, password } = payload
      const { data } = await axios.post('/login', { email, password })
      localStorage.avatarUrl = data.avatarUrl
      localStorage.username = data.username
      localStorage.access_token = data.access_token
      return data
    },

    fetchQuote (context) {
      return axios.get('/random-quote')
    },
    fetchCatImage () {
      return axios.get('/cat-api')
    },
    async fetchUser (context, payload) {
      try {
        const { data } = await axios.get(`/users/${payload.username}`, {
          headers: { access_token: localStorage.access_token }
        })
        console.log(data.user.username, 'fetch user')
        context.commit('updateUserProfile', data.user)
        context.commit('updateUserCats', data.user.Cats)
      } catch (error) {
        context.commit('updateUserProfile', {})
        context.commit('updateUserCats', [])
        console.log(error)
      }
    },
    addCat (context, payload) {
      return axios.post(
        '/cats',
        {
          avatarUrl: payload.avatarUrl,
          name: payload.name,
          imageUrl: payload.imageUrl
        },
        { headers: { access_token: localStorage.access_token } }
      )
    },
    deleteCat (context, payload) {
      return axios.delete(`/cats/${payload.id}`, {
        headers: { access_token: localStorage.access_token }
      })
    },
    async getRooms (context) {
      const { data } = await axios.get('/rooms', {
        headers: { access_token: localStorage.access_token }
      })
      context.commit('getRooms', data.rooms)
      return data
    }
  },
  modules: {}
})
