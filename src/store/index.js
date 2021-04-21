import Vue from 'vue'
import axios from '../../axios/axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    matches: []
  },
  mutations: {
    setLogin (state, boolean) {
      state.loggedIn = boolean
    },
    setMatches (state, payload) {
      state.matches = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email, password
        }
      })
    },
    confirmLogin (context, boolean) {
      context.commit('setLogin', boolean)
    },
    register (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          email, password
        }
      })
    },
    getMatches (context) {
      axios({
        method: 'GET',
        url: '/schedules/33'
      })
        .then(res => {
          console.log(res.data.matches)
          context.commit('setMatches', res.data.matches)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
