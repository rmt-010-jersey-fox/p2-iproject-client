import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    listAnime: [],
    anime: {},
    quotes: []
  },
  mutations: {
    CHANGE_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    FETCH_ANIME (state, payload) {
      state.listAnime = payload
    },
    GET_ANIME (state, payload) {
      state.anime = payload
    },
    CHANGE_TITLE (state, payload) {
      state.anime.name = payload
    },
    CHANGE_IMAGE (state, payload) {
      state.anime.image_url = payload
    },
    CHANGE_STATUS (state, payload) {
      state.anime.status = payload
    },
    CHANGE_DURATION (state, payload) {
      state.anime.duration = payload
    },
    CHANGE_SCORE (state, payload) {
      state.anime.score = payload
    },
    FETCH_QUOTES (state, payload) {
      state.anime = payload
    }
  },
  actions: {
    register (context, obj) {
      return axios({
        url: '/register',
        method: 'post',
        data: {
          username: obj.username,
          email: obj.email,
          password: obj.password
        }
      })
    },
    login (context, obj) {
      return axios({
        url: '/login',
        method: 'post',
        data: {
          email: obj.email,
          password: obj.password
        }
      })
    }
  },
  // addAnime (context, obj) {
  //   return axios({
  //     url: '/anime',
  //     method: 'post',
  //     data: {
  //       title: obj.title,
  //       image_url: obj.image_url,
  //       status: obj.status,
  //       duration: obj.duration,
  //       score: obj.score
  //     },
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  // },
  // fetchAnime (context) {
  //   axios({
  //     url: '/anime',
  //     method: 'get',
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //     .then(res => {
  //       context.commit('FETCH_ANIME', res.data)
  //     })
  //     .catch(err => {
  //       this.$swal.fire({
  //         icon: 'error',
  //         title: `${err.response.status} ${err.response.statusText}`,
  //         text: `${err.response.message}`,
  //         timer: 5000
  //       })
  //     })
  // },
  // getAnime (context, payload) {
  //   axios({
  //     url: `/anime/${payload}`,
  //     method: 'get',
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //     .then(res => {
  //       context.commit('GET_ANIME', res.data)
  //     })
  //     .catch(err => {
  //       this.$swal.fire({
  //         icon: 'error',
  //         title: `${err.response.status} ${err.response.statusText}`,
  //         text: `${err.response.message}`,
  //         timer: 5000
  //       })
  //     })
  // },
  // editAnime (context, payload) {
  //   return axios({
  //     url: `/anime/${payload.id}`,
  //     method: 'put',
  //     data: {
  //       name: payload.name,
  //       image_url: payload.image_url,
  //       category: payload.category,
  //       price: payload.price,
  //       stock: payload.stock
  //     },
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  // },
  // destroyAnime (context, payload) {
  //   return axios({
  //     url: `/anime/${payload}`,
  //     method: 'delete',
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  // },
  // quotesAnime (context) {
  //   return axios({
  //     url: '/data-anime',
  //     method: 'get',
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //     .then(res => {
  //       context.commit('FETCH_QUOTES', res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // },
  modules: {
  }
})
