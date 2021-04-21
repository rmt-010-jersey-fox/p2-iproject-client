import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    wallets: []
  },
  mutations: {
    fetchNews(state, payload) {
      state.news = payload
    },
    fetchWallets (state, payload) {
      state.wallets = payload
    }
  },
  actions: {
    fetchNews (context) {
      axios.get('/news')
        .then(({data}) => {
          console.log(data, 'ini dari data news')
          context.commit('fetchNews', data)
        })
        .catch(error => {
          console.log(error, 'error dari news')
        })
    },
    fetchWallets (context) {
      axios.get('/finances', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => {
          console.log(data, 'ini dari wallet')
          context.commit('fetchWallets', data)
        })
        .catch(error => {
          console.log(error, 'error dari wallet')
        })
    },
    addNewWallet (context, payload) {
      axios.post('/finances', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => {
          console.log(data, 'ini dari add new wallet')
          this.dispatch('fetchWallets')
        })
        .catch(error => {
          console.log(error, 'error dari add new wallet')
        })
    }
  }
})
