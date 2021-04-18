import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from '../api/index'
import router from '../router/index' 
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
          console.log(err.response.data.message);
        })
    },
    register(context, payload){
      axios({
        method : 'POST',
        url: '/register',
        data : payload,
      })
        .then(response=>{
          router.push({name:'Login'})
        })
        .catch(err=>{
          console.log(err.response.data.message);
        })
    }
  },
  modules: {
  }
})
