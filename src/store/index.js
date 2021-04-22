import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isLogin: false,
    events: [],
    threads: [],
    myThreads: [],
    myThread: {},
    thread: {},
    user: {},
    popularGames: []
  },
  mutations: {
    changeIsLogin(commit, data) {
      // console.log(data)
      this.state.isLogin = data
    },
    login (commit, data) {
      // console.log(data)
      localStorage.setItem('access_token', data.access_token)
      this.state.isLogin = true
    },
    getUser (commit, payload) {
      // console.log(data)
      this.state.user = payload
    },
    getEvents (commit, data) {
      // console.log(data, "COMMIT")
      this.state.events = data
    },
    getThreads (commit, data) {
      this.state.threads = data
    },
    getThread (commit, data) {
      this.state.thread = data
    },
    myThreads (commit, data) {
      this.state.myThreads = data
    },
    logout() {
      localStorage.clear()
      this.state.isLogin = false
    },
    getEditThread(commit, data) {
      this.state.myThread = data
    },
    getPopulerGames(commit, data){
      this.state.popularGames = data
    }

  },
  actions: {
    changeIsLogin(context, payload) {
      context.commit('changeIsLogin', payload)
    },
    register (context, payload){
      // console.log(payload)
      return axios.post('/register', payload)
       
    },
    login (context, payload) {
      return axios.post('/login', payload)
    },
    getUser (context, payload) {
      axios.get(`/users/${payload.id}`, {
          headers: { access_token: localStorage.access_token }
        }).then(({ data }) => {
           context.commit('getUser', data)
      //   console.log(data, "GET USER")
        }).catch(err => {
          console.log(err)
        })
    },
    getThread (context, data) {
      axios.get(`/threads/${data}`, {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        context.commit('getThread', data)
      })
    },
    myThreads (context, data) {
      axios.get('/mythreads', {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        context.commit('myThreads', data)
      })
    },
    fetchEvents (context) {
      axios.get('/events', {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        // console.log(data)
        context.commit('getEvents', data)
      }).catch(err => {
        console.log(err)
      })
    },
    fetchThreads (context) {
      axios.get('/threads', {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        // console.log(data)
        context.commit('getThreads', data)
      }).catch(err => {
        console.log(err)
      })
    },
    fetchPopularGames (context) {
      axios.get('/popularGames', {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        // console.log(data)
        context.commit('getPopulerGames', data)
      }).catch(err => {
        console.log(err)
      })
    },
    addEvent (context, data) {
      axios.post('/events', data, {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        // console.log(data)
        this.dispatch('fetchEvents')
      }).catch(err => {
        console.log(err)
      })
    },
    addThread (context, data) {
      axios.post('/threads', data, {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        console.log(data)
        this.dispatch('fetchThreads')
        this.dispatch('myThreads')
      }).catch(err => {
        console.log(err)
      })
    },
    getEditThread(context, data) {
      axios.get(`/threads/${data}`, {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        context.commit('getEditThread', data)
      })
    },
    editThread(context, payload) {
      axios.put(`/threads/${payload.id}`, payload.data, {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        console.log(data)
        this.dispatch('fetchThreads')
        this.dispatch('myThreads')
      }).catch(err => {
        console.log(err)
      })
    },
    deleteThread (context, payload) {
      axios.delete(`/threads/${payload}`, {
        headers: { access_token: localStorage.access_token }
      }).then(({ data }) => {
        console.log(data)
        this.dispatch('fetchThreads')
        this.dispatch('myThreads')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
