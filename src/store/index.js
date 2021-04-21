import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from '../api/axios'
import router from '../router/index'
export default new Vuex.Store({
  state: {
    articles: [],
    comments: [],
    isLogin: false
  },
  mutations: {
    fetchArticles(state, payload) {
      state.articles = payload
    },
    fetchComments(state, payload) {
      state.comments = payload
    },
    isLogin(state, payload) {
      console.log(payload, "payload")
      state.isLogin = payload
    }
  },
  actions: {
    login(context, payload) {
      axios.post('/login', {
        email: payload.email,
        password: payload.password
      })
      .then(({data}) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({name: "Home"})
          context.commit('isLogin', true)
      })
      .catch((error) => {
        console.log(error);
      })
    },
    register(context, payload) {
      axios.post('/register', {
        email: payload.email,
        username: payload.username,
        password: payload.password
      })
      .then(({data}) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({name: "Login"})
      })
      .catch((error) => {
        console.log(error);
      })
    },
    fetchArticles(context, payload) {
      axios.get('/')
      .then(({data}) => {
        console.log(data)
      context.commit('fetchArticles', data)
      })
      .catch((error) => {
        console.log(error);
      })
    },
    fetchComments(context, payload) {
      axios.get('/comments', {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        console.log(data)
        context.commit('fetchComments', data)
        context.commit('isLogin', true)
      })
      .catch((error) => {
        console.log(error.response);
      })
    }
  },
  modules: {
  }
})
