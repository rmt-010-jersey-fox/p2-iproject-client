import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../API/axios'
// import Swal from '../API/sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: {},
    card: {},
    decks: [],
    deck: {},
    dueCards: []
  },
  mutations: {
    setLoginStatus (state, payload) {
      state.isLoggedin = payload.status
    }
  },
  actions: {
    login (context, payload) {

    }
  }
})
