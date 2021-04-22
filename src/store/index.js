import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'
import axios from '../axios/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlists: [],
    playlist: {},
    playlistDetails: {},
    songs: [],
    song: {},
    songLyrics: '',
    charts: {}
  },
  mutations: {
    getPlaylists (state, payload) {
      state.playlists = payload
    },
    getPlaylist (state, payload) {
      state.playlist = payload
    },
    getPlaylistDetails (state, payload) {
      state.playlistDetails = payload
    },
    clearPlaylistPage (state, payload) {
      state.playlist = {}
      state.playlistDetails = {}
    },
    getSongs (state, payload) {
      state.songs = payload
    },
    getSong (state, payload) {
      state.song = payload
    },
    getSongLyrics (state, payload) {
      state.songLyrics = payload
    },
    clearSongPage (state, payload) {
      state.song = {}
      state.songLyrics = ''
    },
    getBillboardCharts (state, payload) {
      state.charts = payload
    }
  },
  actions: {
    changePage (context, payload) {
      router.push({ name: payload })
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          username: payload.username,
          password: payload.password
        }
      })
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'YOUR ACCOUNT HAS BEEN CREATED'
          })
          this.dispatch('login', payload)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          router.push({ name: 'Playlists' })
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    logout (context, payload) {
      localStorage.clear()
      router.push({ name: 'Login' })
    },
    getPlaylists (context, payload) {
      axios({
        method: 'GET',
        url: '/playlists',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('getPlaylists', data)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    getPlaylist (context, payload) {
      axios({
        method: 'GET',
        url: `/playlists/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('getPlaylist', data)
          this.dispatch('getPlaylistDetails', data.source)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    getPlaylistDetails (context, payload) {
      axios({
        method: 'GET',
        url: '/list',
        headers: {
          token: localStorage.getItem('token')
        },
        params: {
          source: payload
        }
      })
        .then(({ data }) => {
          context.commit('getPlaylistDetails', data)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    getSongs (context, payload) {
      axios({
        method: 'GET',
        url: '/songs',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('getSongs', data)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    getSong (context, payload) {
      axios({
        method: 'GET',
        url: `/songs/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('getSong', data)
          const passedPayload = {
            title: data.title,
            artist: data.artist
          }
          this.dispatch('getSongLyrics', passedPayload)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    getSongLyrics (context, payload) {
      axios({
        method: 'GET',
        url: '/lyrics',
        headers: {
          token: localStorage.getItem('token')
        },
        params: {
          title: payload.title,
          artist: payload.artist
        }
      })
        .then(({ data }) => {
          context.commit('getSongLyrics', data.html)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    getBillboardCharts (context, payload) {
      axios({
        method: 'GET',
        url: '/charts',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('getBillboardCharts', data)
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    }
  },
  modules: {
  }
})
