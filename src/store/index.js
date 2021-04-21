import Vue from 'vue'
import axios from '../../axios/axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    setLogin (state, boolean) {
      state.loggedIn = boolean
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
    }
  },
  modules: {
  }
})
