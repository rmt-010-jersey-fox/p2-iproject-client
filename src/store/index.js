import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from '../api/axios'
import router from '../router/index'
export default new Vuex.Store({
  state: {
    articles: [],
    comments: [],
    isLogin: false,
    actions: [],
    specificComment: []
  },
  mutations: {
    fetchArticles(state, payload) {
      state.articles = payload
    },
    fetchComments(state, payload) {
      // console.log(payload)
      state.comments = payload
    },
    isLogin(state, payload) {
      // console.log(payload, "payload")
      state.isLogin = payload
    },
    fetchActions(state, payload) {
      state.actions = payload
    },
    specificComment(state, payload) {
      state.specificComment = payload
      router.push({name: 'AddComment'})
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
    comments(context, payload) {
      axios.get(`/comments?title=${payload}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        console.log(data)
        context.commit('specificComment', data)
        context.commit('isLogin', true)
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    newComments(context, payload) {
      axios.post(`/comments?title=${payload}`, {
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
    },
    addComment(context, payload) {
      axios.post('/comments', payload, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('fetchComments', data)
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    fetchActions(context, payload) {
      axios.get('/action')
      .then(({data}) => {
        console.log(data)
      context.commit('fetchActions', data)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  modules: {
  }
})
