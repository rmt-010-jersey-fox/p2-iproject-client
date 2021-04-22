import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: {},
    games: [],
    wishlist: []
  },
  mutations: {
    setLogin (state, value) {
      state.isLogin = value
    },
    setUser (state, payload) {
      const loggedUser = {
        id: payload.id,
        email: payload.email,
        username: payload.username
      }
      state.currentUser = loggedUser
    },
    FETCH_GAME (state, data) {
      state.games = data
    },
    FAVORITE_GAMES (state, value) {
      state.wishlist = value
    }
  },
  actions: {
    fecthGames (context) {
      axios
        .get('/games')
        .then(({ data }) => {
          context.commit('FETCH_GAME', data)
        })
        .catch(err => console.log(err))
    },
    favoriteGames (context) {
      axios
        .get('/games/wishlists', {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjbGllbnRAbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsaWVudCIsImlhdCI6MTYxOTAxMjQ5Nn0.ADpqi_n6dGdU2wp_MVPAC-N1s7Y08zE9qSWEPw6UCSk'
          }
        })
        .then(({ data }) => {
          context.commit('FAVORITE_GAMES', data)
        })
        .catch(err => console.log(err))
    },
    addWishlist (_, game) {
      axios
        .post('/games', game, {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjbGllbnRAbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsaWVudCIsImlhdCI6MTYxOTAxMjQ5Nn0.ADpqi_n6dGdU2wp_MVPAC-N1s7Y08zE9qSWEPw6UCSk'
          }
        })
        .then(_ => console.log('suksess'))
        .catch(err => console.log(err))
    },
    removeItemWishlist (context, id) {
      axios
        .delete(`/games/wishlists/${id}`, {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjbGllbnRAbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsaWVudCIsImlhdCI6MTYxOTAxMjQ5Nn0.ADpqi_n6dGdU2wp_MVPAC-N1s7Y08zE9qSWEPw6UCSk'
          }
        })
        .then(_ => {
          console.log('success delete')
          context.dispatch('favoriteGames')
          router.push({ name: 'Wishlist' }).catch(_ => {})
        })
        .catch(err => console.log(err))
    },
    signin (context, payload) {
      axios
        .post('/users/signin', payload)
        .then(({ data }) => {
          console.log(data)
          context.commit('setUser', data)
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Home' })
        })
        .catch(err => console.log(err))
    },
    signup (_, newUserData) {
      axios
        .post('/users/signup', newUserData)
        .then(({ data }) => {
          console.log(data, 'Success Sign Up')
          router.push({ name: 'Home' })
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
