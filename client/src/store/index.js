import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timelines: [],
    favorite: [],
    feeds: []
  },
  mutations: {
    fetchTimeline (state, payload) {
      state.timelines = payload
    },
    fetchFavorite (state, payload) {
      state.favorite = payload
    },
    fetchFeeds (state, payload) {
      state.feeds = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
    },
    register (contex, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchTimeline (contex, payload) {
      axios({
        url: '/timeline',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          contex.commit('fetchTimeline', data)
        })
    },
    deleteTimeline (context, id) {
      console.log(id, '<< deleteTimeline')
      axios({
        url: `/timeline/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchTimeline')
        })
    },
    addFavorite (context, payload) {
      axios({
        url: `/favorites/${payload.TimelineId}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(favorite => {
          context.dispatch('fetchFavorite')
        })
    },
    fetchFavorite (context) {
      axios({
        url: '/favorites',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('fetchFavorite', data)
        })
        .catch(err => console.log(err))
    },
    deleteFavorite (context, id) {
      axios({
        url: `/favorites/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchFavorite')
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
      router.push({ name: 'Login' })
    },
    fetchFeeds (context) {
      axios({
        url: '/nytimes',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('fetchFeeds', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
