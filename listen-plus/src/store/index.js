import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    playlists: [],
    playlist: {}
  },
  mutations: {
    FETCH_DATA (state, payload) {
      state.songs = payload
    },
    FETCH_PLAYLISTS (state, payload) {
      state.playlists = payload
    },
    FIND_ONE (state, payload) {
      state.playlist = payload
    }
  },
  actions: {
    fetchData (context) {
      axios.get('/songs')
        .then(({ data }) => {
          context.commit('FETCH_DATA', data)
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
          const accessToken = data.token
          localStorage.setItem('token', accessToken)
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
    fetchPlaylists (context) {
      axios.get('/playlist')
        .then(({ data }) => {
          context.commit('FETCH_PLAYLISTS', data)
        })
        .catch(console.log)
    },
    addData (context, payload) {
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
          router.push('/playlist')
        })
        .catch(console.log)
    },
    addToPlaylist (context, payload) {
      const newData = {
        UserId: payload.UserId,
        PlaylistId: payload.PlaylistId,
        SongId: payload.id
      }
      axios.put(`/playlist/${payload.id}`, newData, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          Swal.fire({
            title: 'Success',
            text: 'Successfully Added To Playlist',
            icon: 'success'
          })
          router.push('/playlist')
        })
        .catch(console.log)
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
          context.dispatch('fetchPlaylist')
          router.push('/playlist')
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
