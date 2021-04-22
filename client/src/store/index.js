import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from '../axios/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    IndoCase: [],
    GlobalCase: [],
    messages: [],
    confirmedCase: 0,
    positiveCase: 0,
    recoveredCase: 0,
    user: '',
    currentUser: {}
  },
  mutations: {
    getIndoCase (state, payload) {
      state.IndoCase = payload.IndoCase
    },
    getGlocalCase (state, payload) {
      state.GlobalCase = payload.GlobalCase
    },
    getMessage (state, payload) {
      state.messages.push(payload)
    },
    getUser (state, payload) {
      state.user = payload.user
    },
    setCurrentUser (state, payload) {
      state.currentUser = payload
    },
    getConfirmedCaseGlobal (state, payload) {
      state.confirmedCase = payload.confirmedCase
    },
    getPositiveCaseGlobal (state, payload) {
      state.positiveCase = payload.positiveCase
    },
    getRecoveredCaseGlobal (state, payload) {
      state.recoveredCase = payload.recoveredCase
    },
    getNews (state, payload) {
      state.news = payload.news
    }
  },
  actions: {
    showIndoCase (context, payload) {
      axios({
        method: 'get',
        url: '/showCase'
      })
        .then(({ data }) => {
          context.commit('getIndoCase', {
            IndoCase: data
          })
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    showGlobalCase (context, payload) {
      let temp = 0
      let tempPositive = 0
      let tempRecovered = 0
      axios({
        method: 'get',
        url: '/globalCase'
      })
        .then(({ data }) => {
          data.forEach(el => {
            temp = temp + el['Confirmed Cases']
            tempPositive = tempPositive + el['Active Cases']
            tempRecovered = tempRecovered + el.Recovered
            if (el.Recovered === null) {
              el.recoveredCase = 0
            }
          })
          context.commit('getConfirmedCaseGlobal', {
            confirmedCase: temp
          })
          context.commit('getPositiveCaseGlobal', {
            positiveCase: tempPositive
          })
          context.commit('getRecoveredCaseGlobal', {
            recoveredCase: tempRecovered
          })
          context.commit('getGlocalCase', {
            GlobalCase: data
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          name: payload.name,
          email: payload.email
        }
      })
        .then(response => {
          // console.log(response)
          context.commit('getUser', {
            user: payload.name
          })
          context.commit('setCurrentUser', payload)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('username', payload.name)
          router.push({ name: 'Chat' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        method: 'post',
        url: '/register',
        data: payload
      })
        .then(response => {
          console.log(response)
          router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    showNews (context, payload) {
      axios({
        method: 'get',
        url: '/news'
      })
        .then(({ data }) => {
          context.commit('getNews', {
            news: data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
