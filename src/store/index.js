import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    details: {},
    isLogin: false,
    comments: [],
    latest: [],
    watch: [],
    UserId: 0,
    messages: []
  },
  mutations: {
    PUSH_MSG (state, payload) {
      state.messages.push(payload)
    },
    SEARCH_MOVIE (state, payload) {
      state.movies = payload
    },
    MOVIE_DETAILS (state, payload) {
      state.details = payload
    },
    LOGIN (state, payload) {
      state.isLogin = payload
    },
    LOGOUT (state, payload) {
      state.isLogin = payload
    },
    FETCH_COMMENTS (state, payload) {
      state.comments = payload
    },
    LATEST (state, payload) {
      state.latest = payload
    },
    FETCH_WATCH (state, payload) {
      state.watch = payload
    },

    VERIFY_USER (state, payload) {
      state.UserId = payload
    }
  },
  actions: {
    searchMovie (context, input) {
      const search = input.search
      axios
        .post('/searchMovie', { search })
        .then(response => {
          context.commit('SEARCH_MOVIE', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    movieDetail (context, input) {
      axios
        .post(`/details/${input}`)
        .then(response => {
          context.commit('MOVIE_DETAILS', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, input) {
      axios
        .post('/login', input)
        .then(response => {
          const { token, id } = response.data
          localStorage.setItem('token', token)
          localStorage.setItem('UserId', id)
          router.push('/')
          context.commit('LOGIN', true)
          context.commit('VERIFY_USER', localStorage.UserId)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout (context, input) {
      localStorage.clear()
      context.commit('LOGOUT', false)
      router.push('/login')
    },
    addComment (context, input) {
      const { comment, imdbId } = input
      axios
        .post(
          `/comments/${imdbId}`,
          { comment },
          {
            headers: { token: localStorage.token }
          }
        )
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchComments', imdbId)
        })
        .catch(err => console.log(err))
    },
    register (context, input) {
      axios
        .post('/register', input)
        .then(response => {
          console.log(response)
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchComments (context, movieId) {
      console.log('==============')
      axios
        .get('/comments/' + movieId)
        .then(({ data }) => {
          context.commit('FETCH_COMMENTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    latest (context) {
      axios
        .get('/latest')
        .then(({ data }) => {
          context.commit('LATEST', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addWatch (context, input) {
      const { poster, title, MovieId } = input
      console.log(input)
      axios
        .post(`/watchlists/${MovieId}`, { poster, title }, {
          headers: { token: localStorage.token }
        })
        .then(({ data }) => {
          console.log(data)
          router.push('/watchlists')
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchWatch (context) {
      axios
        .get('/watchlists', {
          headers: {
            token: localStorage.token
          }
        })
        .then(({ data }) => {
          context.commit('FETCH_WATCH', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    removeWatch (context, id) {
      axios
        .delete(`/watchlists/${id}`, {
          headers: { token: localStorage.token }
        })
        .then(({ data }) => {
          context.dispatch('fetchWatch')
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeComment (context, input) {
      const { MovieId, id } = input
      axios
        .delete(`/comments/${id}`, {
          headers: { token: localStorage.token }
        })
        .then(({ data }) => {
          context.dispatch('fetchComments', MovieId)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {}
})
