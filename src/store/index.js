import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animes: [],
    anime: '',
    Update: []
  },
  mutations: {
    setAnime (state, payload) {
      state.animes = payload
      console.log(payload)
    },
    setAnimeById (state, payload) {
      state.anime = payload
      console.log(payload)
    },
    getUpdate (state, payload) {
      state.Update = payload
    }
  },
  actions: {
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('email', data.email)
          router.push('/')
          Vue.swal({
            title: `Welcome Back ${data.email}`,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false
          })
        })
        .catch(err => {
          if (err.response.data) {
            Vue.swal({
              icon: 'error',
              title: 'You Cant Login',
              text: err.response.data.message
            })
          } else {
            console.log(err.response)
          }
        })
    },
    handleRegister (context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          context.dispatch('handleLogin', {
            email: payload.email,
            password: payload.password
          })
        })
        .catch(err => {
          if (err.response.data) {
            Vue.swal({
              icon: 'error',
              title: 'You Cant Register',
              text: `${err.response.data.message}\n\r`
            })
          } else {
            console.log(err.response)
          }
        })
    },
    handleLogout (context) {
      localStorage.clear()
      router.push('/login')
      Vue.swal({
        title: 'Bye Bye!',
        icon: 'success',
        toast: true,
        position: 'top-end',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      })
    },
    fetchAnimes (context) {
      axios({
        method: 'GET',
        url: 'anime',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((res) => {
          context.commit('setAnime', res.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    fetchComplete (context) {
      axios({
        method: 'GET',
        url: 'completed',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((res) => {
          context.commit('setAnime', res.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    handleAddAnime (context, payload) {
      axios({
        method: 'POST',
        url: 'anime',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          imageURL: payload.imageURL,
          episodes: payload.episodes,
          totalEpisodes: payload.totalEpisodes
        }
      })
        .then((res) => {
          console.log(res.data)
          this.dispatch('fetchAnimes')
          router.push('/')
          Vue.swal({
            title: 'Success',
            text: 'Anime Added Success',
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            showConfirmButton: false
          })
        })
        .catch((err) => {
          const errors = err.response.data.message
          Vue.swal({
            title: 'Something Wrong!',
            text: errors,
            icon: 'error'
          })
        })
    },
    deleteData (context, payload) {
      Vue.swal({
        title: 'Really??',
        text: 'Wanna Delete This Anime From List?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return axios({
              method: 'DELETE',
              url: 'anime/' + payload,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
          }
        })
        .then((res) => {
          this.dispatch('fetchAnimes')
          Vue.swal('Deleted!', res.data.message)
        })
        .catch((err) => {
          const errors = err.response.data.message
          Vue.swal({
            title: 'Something Wrong!',
            text: errors,
            icon: 'error'
          })
        })
    },
    getDataById (context, payload) {
      axios({
        method: 'GET',
        url: 'anime/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((res) => {
          context.commit('setAnimeById', res.data)
          router.push('/editanime/' + payload)
        })
        .catch((err) => {
          if (err.response.status === 404) {
            router.push('/datanotfound')
          }
          console.log(err.response)
        })
    },
    getDataPatch (context, payload) {
      axios({
        method: 'GET',
        url: 'anime/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((res) => {
          context.commit('setAnimeById', res.data)
          router.push('/patchanime/' + payload)
        })
        .catch((err) => {
          if (err.response.status === 404) {
            router.push('/datanotfound')
          }
          console.log(err.response)
        })
    },
    handleUpdateAnimeById (context, payload) {
      axios({
        method: 'PUT',
        url: 'anime/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          imageURL: payload.imageURL,
          episodes: payload.episodes,
          totalEpisodes: payload.totalEpisodes
        }
      })
        .then((res) => {
          this.dispatch('fetchAnimes')
          router.push('/')
          Vue.swal({
            title: 'Success',
            text: res.data.message,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            showConfirmButton: false
          })
        })
        .catch((err) => {
          const errors = err.response.data.message
          Vue.swal({
            title: 'Something Wrong!',
            text: errors,
            icon: 'error'
          })
        })
    },
    patchAnime (context, payload) {
      axios({
        method: 'PATCH',
        url: 'anime/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          episodes: payload.episodes
        }
      })
        .then((res) => {
          this.dispatch('fetchAnimes')
          router.push('/')
          Vue.swal({
            title: 'Success',
            text: res.data.message,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            showConfirmButton: false
          })
        })
        .catch((err) => {
          const errors = err.response.data.message
          Vue.swal({
            title: 'Something Wrong!',
            text: errors,
            icon: 'error'
          })
        })
    },
    Update (context) {
      axios({
        method: 'get',
        url: 'getUpdate'
      })
        .then((response) => {
          console.log(response.data)
          context.commit('getUpdate', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {

  },
  modules: {
  }
})
