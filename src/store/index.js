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
      // console.log(payload, "<<di fetch comments")
      state.comments = payload
      router.push({name: 'Comment'})
    },
    isLogin(state, payload) {
      // console.log(payload, "payload")
      state.isLogin = payload
    },
    fetchActions(state, payload) {
      state.actions = payload
    },
    showComment(state, payload) {
      console.log(payload, "<<<payload show comment")
      state.comments = payload 
      router.push({name: 'AddComment'})
    },
    specificComment(state, payload) {
      state.specificComment = payload
      router.push({name: 'EditComment', params: {id: payload.id}})
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
      // console.log(payload)
      axios.get(`/comments`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        console.log(data, "<< data di comment")
        context.commit('fetchComments', data)
        // context.commit('isLogin', true)
      })
      .catch((error) => {
        console.log(error.response);
      })
    }, 
    addComment(context, payload) {
      // console.log(payload, "<,payload di store add")
      axios.post('/comments', payload, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        // console.log(data, "<<data di add store")
        context.commit('fetchComments', data)
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    deleteComment(context, id) {
      axios.delete(`/comments/${id}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        // console.log(data, "di delete")
        context.commit('fetchComments', data)
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    getEditComment(context, id) {
      axios.get(`/comments/${id}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        // console.log(data, "di delete")
        context.commit('specificComment', data)
        //memanggil action fetchcarts
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    editComment(context, payload) {
      console.log(payload, "<<< payload edit")
        axios.put(`/comments/${payload.id}`, payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({data}) => {
          // console.log(data, "<<<data edit")
          context.commit('fetchComments', data)  
        })
        .catch(err => {
            console.log(err.response)
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
