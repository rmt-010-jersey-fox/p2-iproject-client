import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    song: {},
    playlists: [],
    playlist: {},
    isLogin: false,
    songSearchResults: [],
    lyrics: ''
  },
  mutations: {
    FETCH_SONGS (state, payload) {
      state.songs = payload
    },
    FETCH_PLAYLISTS (state, payload) {
      state.playlists = payload
    },
    FIND_PLAYLIST (state, payload) {
      state.playlist = payload
    },
    FIND_SONG (state, payload) {
      state.song = payload
    },
    IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SEARCHRESULT_SONG (state, payload) {
      state.songSearchResults = payload
    },
    SEARCHRESULT_LYRICS (state, payload) {
      state.lyrics = payload
    }
  },
  actions: {
    fetchSongs (context, payload) {
      axios.get('/songs')
        .then(({ data }) => {
          context.commit('FETCH_SONGS', data)
        })
        .catch(console.log)
    },
    logIn (context, payload) {
      const loginData = {
        email: payload.email,
        password: payload.password
      }
      axios.post('/login', loginData)
        .then(({ data }) => {
          const token = data.token
          localStorage.setItem('token', token)
          context.commit('IS_LOGIN', true)
          router.push('/songs')
        })
        .catch(() => {
          Swal.fire({
            title: 'Error',
            text: 'Invalid Email / Password',
            icon: 'error'
          })
        })
    },
    register (context, payload) {
      const newData = {
        name: payload.name,
        email: payload.email,
        password: payload.password
      }
      axios.post('/register', newData)
        .then(() => {
          router.push('/login')
        })
        .catch(console.log)
    },
    fetchPlaylists (context, payload) {
      axios.get('/playlist', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCH_PLAYLISTS', data)
        })
        .catch(console.log)
    },
    addPlaylist (context, payload) {
      const newData = {
        name: payload.name,
        cover: payload.cover
      }
      axios.post('/playlist', newData, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          Swal.fire({
            title: 'Success',
            text: 'Successfully Adding Playlist',
            icon: 'success'
          })
          router.push('/playlist')
        })
        .catch((err) => {
          console.log(err.response, '<<< errornyaa')
        })
    },
    addSongToPlaylist (context, payload) {
      axios.put(`/playlist/${payload.id}`, {
        name: payload.name
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }
      )
        .then(() => {
          Swal.fire({
            title: 'Success',
            text: 'Successfully Added To Playlist',
            icon: 'success'
          })
          context.dispatch('fetchPlaylist')
          router.push('/playlist')
        })
        .catch(() => {
          Swal.fire({
            title: 'Error',
            text: 'Login First',
            icon: 'error'
          })
          router.push('/login')
        })
    },
    delete (context, payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Data Will Be Deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then(res => {
          let newFetch
          if (res.isConfirmed) {
            newFetch = axios.delete(`/playlist/${payload.id}`, {
              headers: {
                token: localStorage.getItem('token')
              }
            })
          }
          return newFetch
        })
        .then(() => {
          context.dispatch('fetchPlaylists')
        })
        .catch(console.log)
    },
    findSong (context, payload) {
      axios.get(`/songs/${payload.id}`)
        .then(({ data }) => {
          context.commit('FIND_SONG', data)
        })
        .catch(console.log)
    },
    findPlaylist (context, payload) {
      axios.get(`/playlist/${payload.id}`)
        .then(({ data }) => {
          context.commit('FIND_PLAYLIST', data)
        })
        .catch(console.log)
    },
    searchSong (context, payload) {
      axios.post('/search', {
        keywords: payload.keywords
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('SEARCHRESULT_SONG', data)
        })
        .catch(console.log)
    },
    addToSong (context, payload) {
      const newData = {
        track_title: payload.track_title,
        artist: payload.artist,
        album_title: payload.album_title
      }
      axios.post('/songs', newData)
        .then(() => {
          router.push('/')
        })
        .catch(console.log)
    },
    fetchLyrics (context, payload) {
      axios.post('/lyrics', {
        keywords: payload.keywords
      })
        .then(({ data }) => {
          context.commit('SEARCHRESULT_LYRICS', data)
          router.push('/lyrics')
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
