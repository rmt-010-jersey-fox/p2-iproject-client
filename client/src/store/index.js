import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    games: []
  },
  mutations: {
    setLogin (state, value) {
      state.isLogin = value
    },
    FETCH_GAME (state, data) {
      state.games = data
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
    }
  },
  modules: {
  }
})
