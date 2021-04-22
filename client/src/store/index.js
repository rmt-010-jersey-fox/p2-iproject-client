import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

const api_key_tmdb = 'eef677a855c09c071ba6f4fb66b4869f'

export default new Vuex.Store({
  state: {
    NewMovie: [],
    PopularMovie: [],
    TopRatedMovie: [],
    UpcomingMovie: [],
    pageCount: 1,
    isLogin: true,
    myMovies: [],
    information: []
  },
  mutations: {
    newMovie(state, payload) {
      state.NewMovie = payload
    },
    popularMovie(state, payload) {
      state.PopularMovie = payload
    },
    topRatedMovie(state, payload) {
      state.TopRatedMovie = payload
    },
    upcomingMovie(state, payload) {
      state.UpcomingMovie = payload
    },
    chagePage(state, payload) {
      state.pageCount = payload
    },
    changeisLogin(state, payload) {
      state.isLogin = payload
    },
    myMovies(state, payload) {
      state.myMovies = payload
    },
    changeInformation(state, payload) {
      state.information = payload
    }
  },
  actions: {
    // LOGIN
    login(context, payload) {
      let loginUser = payload
      axios({
        method: 'POST',
        url: '/login',
        data: loginUser
      })
        .then(response => {
          context.commit('changeisLogin', true)
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch((err) => { console.log(err); })
    },
    // REGISTER
    register(context, payload) {
      let newUser = payload
      axios({
        method: 'POST',
        url: '/register',
        data: newUser
      })
        .then(response => {
          router.push('/login')
        })
        .catch((err) => { console.log(err); })
    },

    // MOVIE --------------------------------------
    // NEW MOVIE FROM TMDB
    getNewMovie(context, payload) {
      const page = context.state.pageCount
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key_tmdb}&language=en-US&page=${page}`
      })
        .then(response => {
          context.commit('newMovie', response.data.results)
        })
        .catch((err) => { console.log(err); })
    },
    // POPULAR MOVIE FROM TMDB
    getPopularMovie(context, payload) {
      const page = context.state.pageCount
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key_tmdb}&language=en-US&page=${page}`
      })
        .then(response => {
          context.commit('popularMovie', response.data.results)
        })
        .catch((err) => { console.log(err); })
    },
    // TOP RATED FROM TMDB
    getTopRatedMovie(context, payload) {
      const page = context.state.pageCount
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key_tmdb}&language=en-US&page=${page}`
      })
        .then(response => {
          context.commit('topRatedMovie', response.data.results)
        })
        .catch((err) => { console.log(err); })
    },
    // UPCOMING FROM TMDB
    getUpcomingMovie(context, payload) {
      const page = context.state.pageCount
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key_tmdb}&language=en-US&page=${page}`
      })
        .then(response => {
          context.commit('upcomingMovie', response.data.results)
        })
        .catch((err) => { console.log(err); })
    },

    // MY LIST
    // ADD TO MY MOVIE
    addToMyMovie(context, payload) {
      axios({
        method: 'POST',
        url: '/my-movies',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          router.push('/my-movies')
        })
        .catch(err => { console.log(err); })
    },
    // SHOW MY MOVIES
    showMyMovies(context, payload) {
      axios({
        method: 'GET',
        url: '/my-movies',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.commit('myMovies', response.data)
        })
        .catch(err => { console.log(err); })
    },
    // DELETE MY MOVIE LISE
    deleteMyMovie(context, payload) {
      const id = payload
      axios({
        method: 'DELETE',
        url: `/my-movies/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.dispatch('showMyMovies')
        })
        .catch(err => { console.log(err); })
    },

    // INFORMATION
    getInformation(context, payload) {
      axios({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movies&api-key=4AclZDaw47fOXf4TFosSm13Ns3OgSL9Z'
      })
        .then(response => {
          context.commit('changeInformation', response.data.response.docs)
        })
        .catch(err => {console.log(err);})
    }
  },
  modules: {
  },
  getters: {
    getNewMovie(state) {
      return state.NewMovie
    },
    getPopularMovie(state) {
      return state.PopularMovie
    },
    getTopRatedMovie(state) {
      return state.TopRatedMovie
    },
    getUpcomingMovie(state) {
      return state.UpcomingMovie
    },
    getPageCount(state) {
      return state.pageCount
    },
    getisLogin(state) {
      return state.isLogin
    },
    getMyMovies(state) {
      return state.myMovies
    },
    getInformation(state) {
      return state.information
    }
  }
})
