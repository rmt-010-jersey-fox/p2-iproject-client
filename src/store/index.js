import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    library: []
  },
  mutations: {
    updateUser (state, payload) {
      state.user = payload.user
    },
    updateLibrary (state, payload) {
      state.library = payload.books
    }
  },
  actions: {
    login (context, payload) {
      return axios.post('/login', payload.user)
    },
    register (context, payload) {
      return axios.post('/register', payload.user)
    },
    getUserProfile (context, payload) {
      axios.get('/profile', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateUser', { user: data })
        })
        .catch(err => {
          console.log(err.response);
        })
    },
    findBooks (context, payload) {
      return axios.post('/books/search', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addToLibrary (context, payload) {
      axios.post('/books', payload.bookData, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          context.dispatch('getLibrary')
        })
        .catch(err => {
          console.log(err.response);
        })
    },
    getLibrary (context) {
      axios.get('/books', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateLibrary', { books: data })
        })
        .catch(err => {
          console.log(err);
        })
    },
    deleteBook (context, payload) {
      axios.delete('/books/' + payload.id, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          context.dispatch('getLibrary')
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
