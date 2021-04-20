import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from '../api/index'
import router from '../router/index'
import Swal from 'sweetalert2'
export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('token') ? true : false,
    books: [],
    book: {},
    wishlists: [],
    comments: [],
    wishLikeAmount: {},
  },
  mutations: {
    setLogin(state) {
      state.isLogin = true
    },
    setLogout(state) {
      state.isLogin = false
    },
    fetchBooks(state, payload) {
      state.books = payload
    },
    fetchOneBook(state, payload) {
      state.book = payload
    },
    fetchWishlist(state, payload) {
      state.wishlists = payload
    },
    fetchComments(state, payload) {
      state.comments = payload
    },
    fetchWishLikeAmount(state, payload) {
      state.wishLikeAmount = payload
    }
  },
  actions: {
    googleLogin(context, payload) {
      axios({
        method: 'post',
        url: '/googleLogin',
        data: {
          id_token: payload
        }
      })
        .then(response => {
          localStorage.setItem('token', response.data.token)
          context.commit('setLogin')
          router.push({ name: 'Home' })
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    login(context, payload) {
      // console.log(payload);
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(response => {
          // console.log('dilogin');
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('username', response.data.username)
          context.commit('setLogin')
          router.push({ name: 'Home' })
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    register(context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload,
      })
        .then(response => {
          Swal.fire({
            title: 'Success',
            text: 'Registrasi berhasil',
            icon: 'success',
            confirmButtonText: 'close'
          })
          router.push({ name: 'Login' })
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    fetchBooks(context, payload) {
      axios({
        method: 'GET',
        url: `/books/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.commit('fetchBooks', response.data)
        })
        .catch(err => {
          console.log(err.response.data);
        })
    },
    fetchOneBook(context, payload) {
      console.log(payload);
      axios({
        method: 'GET',
        url: `/book/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          // console.log(response.data);
          context.commit('fetchOneBook', response.data)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    fetchWishlists(context, payload) {
      axios({
        method: 'GET',
        url: '/favouriteBooks',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.commit('fetchWishlist', response.data)
        })
        .catch(err => {
          console.log(err.response.data);
        })
    },
    fetchComments(context, payload) {
      axios({
        method: 'GET',
        url: `/favouriteBooks/comment/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.commit('fetchComments', response.data)
        })
        .catch(err => {
          console.log(err.response.data);
        })
    },
    fetchWishLikeAmount(context, payload) {
      axios({
        method: 'GET',
        url: `/favouriteBooks/wishLikeAmount/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          // console.log(response.data.wished,'distore')
          context.commit('fetchWishLikeAmount', response.data)
        })
        .catch(err => {
          console.log(err.response.data);
        })
    },
    addWishLists(context, payload) {
      axios({
        method: 'POST',
        url: '/favouriteBooks',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.dispatch('fetchWishLikeAmount', payload.isbn)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    addLike(context, payload) {
      axios({
        method: 'POST',
        url: `favouriteBooks/like`,
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.dispatch('fetchWishLikeAmount', payload.isbn)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    dislike(context, payload) {
      axios({
        method: 'POST',
        url: `favouriteBooks/dislike`,
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.dispatch('fetchWishLikeAmount', payload.isbn)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    addComment(context, payload) {
      axios({
        method: 'POST',
        url: '/favouriteBooks/comment/',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.dispatch('fetchComments', payload.isbn)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    editComment(context, payload) {
      axios({
        method: 'POST',
        url: `/favouriteBooks/editComment/`,
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.dispatch('fetchComments', payload.isbn)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    deleteComment(context, payload) {
      axios({
        method: 'DELETE',
        url: `/favouriteBooks/deleteComment/${payload}`,
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.dispatch('fetchComments', payload)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    deleteWishlist(context, payload) {
      axios({
        method: 'DELETE',
        url: `/favouriteBooks/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          context.dispatch('fetchWishlists')
          context.dispatch('fetchWishLikeAmount', payload)
        })
        .catch(err => {
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
  },
  modules: {
  }
})
