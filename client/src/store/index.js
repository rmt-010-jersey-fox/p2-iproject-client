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
    }
  },
  modules: {
  }
})
