import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../API/axios.js'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    images: [],
    galleries: [],
    favourites: [],
    currentImage: {},
    pexels: []
  },
  mutations: {
    setLogin (state, payload) {
      state.isLogin = payload
    },
    setImages (state, payload) {
      state.images = payload
    },
    setGalleries (state, payload) {
      state.galleries = payload
    },
    setFavourites (state, payload) {
      state.favourites = payload
    },
    setCurrentImage (state, payload) {
      state.currentImage = payload
    },
    setPexels (state, payload) {
      state.pexels = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          const fetchToken = response.data.access_token
          localStorage.setItem('access_token', fetchToken)
          context.commit('setLogin', true)
          Swal.fire({
            icon: 'success',
            title: 'Login successfully',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    },
    fetchImages (context, payload) {
      axios({
        method: 'GET',
        url: '/images'
      })
        .then(response => {
          const data = response.data
          context.commit('setImages', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchGalleries (context, payload) {
      axios({
        method: 'GET',
        url: '/images/my-images',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          const data = response.data
          context.commit('setGalleries', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchFavourites (context, payload) {
      axios({
        method: 'GET',
        url: '/favourites',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          const data = response.data
          context.commit('setFavourites', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    findImage (context, payload) {
      axios({
        method: 'GET',
        url: `/images/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          const data = response.data
          context.commit('setCurrentImage', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteImage (context, payload) {
      let flag = false
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.isConfirmed) {
          flag = true
          return axios({
            method: 'DELETE',
            url: `/images/${payload.id}`,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        } else {
          flag = false
        }
      })
        .then(response => {
          if (flag) {
            console.log('Image deleted successfully')
            router.push('/gallery')
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    },
    addImage (context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/images',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          imgUrl: payload.imageUrl,
          category: payload.category,
          description: payload.description
        }
      })
        .then(response => {
          console.log('Image added successfully')
          Swal.fire({
            icon: 'success',
            title: 'Image added successfully',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          console.log(err.response)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    },
    fetchPexels (context, payload) {
      // FETCH PEXELS
      axios({
        method: 'GET',
        url: `pexels/?search=${payload.search}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          const data = response.data
          context.commit('setPexels', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
