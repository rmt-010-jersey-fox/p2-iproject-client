import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../API/axios.js'
import Swal from 'sweetalert2'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    images: [],
    galleries: [],
    favourites: [],
    currentImage: {},
    comments: [],
    pexels: [],
    pixa: [],
    page: 'Home'
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
    },
    setPixa (state, payload) {
      state.pixa = payload
    },
    setComments (state, payload) {
      state.comments = payload
    },
    setPage (state, payload) {
      state.page = payload
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
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Register successfully',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/login')
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
    fetchComments (context, payload) {
      axios({
        method: 'GET',
        url: `/comments/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          const data = response.data
          context.commit('setComments', data)
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
          context.dispatch('fetchComments', {
            id: data.id
          })
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
    },
    fetchPixa (context, payload) {
      axios({
        method: 'GET',
        url: `/pixa?category=${payload.category}&page=${payload.page}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          const data = response.data
          context.commit('setPixa', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editImage (context, payload) {
      console.log(payload)

      axios({
        method: 'PUT',
        url: `/images/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          imgUrl: payload.imgUrl,
          category: payload.category,
          description: payload.description
        }
      })
        .then(response => {
          console.log('image updated succesfully')
          Swal.fire({
            icon: 'success',
            title: 'Image updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
          router.go(-1)
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
    editDescription (context, payload) {
      axios({
        method: 'PATCH',
        url: `/images/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          description: payload.description
        }
      })
        .then(response => {
          console.log('Description updated successfully')
          // context.dispatch('findImage', payload)
          Swal.fire({
            icon: 'success',
            title: 'Description updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
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
    addFavourite (context, payload) {
      axios({
        method: 'POST',
        url: `/favourites/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log('Added to favourites successfully')
          // context.dispatch('findImage', payload)
          Swal.fire({
            icon: 'success',
            title: 'Added to Favourites',
            showConfirmButton: false,
            timer: 1500
          })
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
    removeFavourite (context, payload) {
      axios({
        method: 'DELETE',
        url: `/favourites/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Favourite deleted',
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchFavourites')
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
    postComment (context, payload) {
      axios({
        method: 'POST',
        url: `/comments/${payload.imageId}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          content: payload.content
        }
      })
        .then(response => {
          console.log('Post comment successfully')
          // context.dispatch('findImage', payload)
          context.dispatch('fetchComments', {
            id: payload.imageId
          })
          Swal.fire({
            icon: 'success',
            title: 'Comment Posted',
            showConfirmButton: false,
            timer: 1500
          })
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
    deleteComment (context, payload) {
      axios({
        method: 'DELETE',
        url: `/comments/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Comment deleted',
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchComments', {
            id: payload.imageId
          })
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
    editContent (context, payload) {
      axios({
        method: 'PATCH',
        url: `/comments/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          content: payload.content
        }
      })
        .then(response => {
          console.log('comment edited succesfully')
          Swal.fire({
            icon: 'success',
            title: 'Comment edited',
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchComments', {
            id: payload.imageId
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
