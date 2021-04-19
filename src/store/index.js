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
    wishlists: []
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
    fetchWishlist(state, payload) {
      state.wishlists = payload
    }
  },
  actions: {
    googleLogin (context, payload) {
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
      console.log(payload);
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
      .then(response => {
          console.log('dilogin');
          localStorage.setItem('token', response.data.token)
          context.commit('setLogin')
          router.push({name:'Home'})
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
    register(context, payload){
      axios({
        method : 'POST',
        url: '/register',
        data : payload,
      })
        .then(response=>{
          Swal.fire({
            title: 'Success',
            text: 'Registrasi berhasil',
            icon: 'success',
            confirmButtonText: 'close'
          })
          router.push({name:'Login'})
        })
        .catch(err=>{
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    fetchBooks (context, payload) {
      axios({
        method : 'GET',
        url: `/books/${payload}`,
        headers : {
          token : localStorage.getItem('token')
        }
      })
        .then(response=>{
          context.commit('fetchBooks',response.data )
        })
        .catch(err=>{
          console.log(err.response.data);
        })
    },
    fetchWishlists (context, payload) {
      axios({
        method : 'GET',
        url : '/favouriteBooks',
        headers : {
          token : localStorage.getItem('token')
        }
      })
        .then(response=>{
          context.commit('fetchWishlist', response.data)
        })
        .catch(err=>{
          console.log(err.response.data);
        })
    },
    addWishLists (context, payload) {
      axios({
        method : 'POST',
        url : '/favouriteBooks',
        data : payload,
        headers : {
          token : localStorage.getItem('token')
        }
      })
        .then (response=>{
          Swal.fire({
            title: 'Success',
            text: 'Buku berhasil dimasukan ke dalam Wishlists',
            icon: 'success',
            confirmButtonText: 'close'
          })
        })
        .catch (err=>{
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    },
    deleteWishlist (context, payload) {
      axios({
        method : 'DELETE',
        url : `/favouriteBooks/${payload}`,
        headers : {
          token : localStorage.getItem('token')
        }
      })
        .then (response => {
          context.dispatch('fetchWishlists')
          Swal.fire({
            title: 'Success',
            text: 'Buku berhasil dihapus dari Wishlists',
            icon: 'success',
            confirmButtonText: 'close'
          })
        })
        .catch (err=>{
          Swal.fire({
            title: 'Warning!',
            text: err.response.data,
            icon: 'error',
            confirmButtonText: 'close'
          })
        })
    }
  },
  modules: {
  }
})
