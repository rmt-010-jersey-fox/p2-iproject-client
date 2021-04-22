import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    library: [],
    bookDetail: {},
    booksRecommend: [],
    recommendDetail: {}
  },
  mutations: {
    updateUser (state, payload) {
      state.user = payload.user
    },
    updateLibrary (state, payload) {
      state.library = payload.books
    },
    updateBookDetail (state, payload) {
      state.bookDetail = payload.detail
    },
    updateRecommendation (state, payload) {
      state.booksRecommend = payload.recommend
    },
    updateRecommendDetail (state, payload) {
      state.recommendDetail = payload.detail
    }
  },
  actions: {
    login (context, data) {
      return axios.post('/login', data.user)
    },
    register (context, data) {
      return axios.post('/register', data.user)
    },
    getUserProfile (context) {
      axios.get('/profile', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateUser', { user: data })
        })
        .catch(err => {
          console.log(err);
        })
    },
    findBooks (context, data) {
      return axios.post('/books/search', data, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addToLibrary (context, data) {
      axios.post('/books', data.bookData, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          Toast.fire({
            icon: 'success',
            title: `Book Added To Library`
          })
          context.dispatch('getLibrary')
        })
        .catch( err => {
          let errs = ''
          err.response.data.message.errors.forEach(el => {
            errs+= `<p>${el.message}</p>`
          })
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong :/',
            html: errs
          })
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
    deleteBook (context, data) {
      axios.delete('/books/' + data.id, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          Toast.fire({
            icon: 'success',
            title: `Book Removed From Library`
          })
          context.dispatch('getLibrary')
        })
        .catch(err => {
          console.log(err);
        })
    },
    getBookDetail (context, data) {
      axios.get('/books/' + data.id, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateBookDetail', { detail: data })
        })
        .catch(err => {
          console.log(err);
        })
    },
    editBook (context, data) {
      axios.put('/books/' + data.id, data.bookData, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          Toast.fire({
            icon: 'success',
            title: `Book Edited`
          })
          context.dispatch('getLibrary')
        })
        .catch(err => {
          console.log(err);
        })
    },
    getRecommendations (context) {
      axios.get('books/recommendation', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateRecommendation', { recommend: data })
        })
        .catch(err => {
          console.log(err);
        })
    },
    getRecommendDetail (context, data) {
      context.commit('updateRecommendDetail', { detail: data });
    }
  },
  modules: {
  }
})
