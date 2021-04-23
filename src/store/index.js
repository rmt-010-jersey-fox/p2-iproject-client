import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router/index'

const toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  showCloseButton: true,
  timer: 1500,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    username: '',
    cards: [],
    carts: [],
    booking: {},
    serviceId: undefined
  },
  mutations: {
    setLogin (state, payload) {
      state.isLogin = payload.status
    },
    setUsername (state, payload) {
      state.username = payload.username
    },
    setCarts (state, payload) {
      state.carts = payload.carts
    },
    setCards (state, payload) {
      state.cards = payload.cards
    },
    setBooking (state, payload) {
      state.booking = payload
    },
    setServiceId (state, payload) {
      state.serviceId = payload
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
        .then(({ data }) => {
          context.commit('setLogin', { status: true })
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          router.push({ name: 'Home' })

          toast.fire({
            icon: 'success',
            iconColor: 'blue',
            title: 'Welcome to CMS Admin!',
            background: 'azure'
          })
        })
        .catch((err) => {
          toast.fire({
            icon: 'error',
            title: err.response.data.message,
            background: 'mistyrose'
          })
        })
    },
    logout (context) {
      if (confirm('Are you sure Logout?')) {
        context.commit('setLogin', { status: false })
        localStorage.clear()
        router.push({ name: 'Login' })
      }
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          username: payload.username,
          phone: payload.phone,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push({ name: 'Login' })

          toast.fire({
            icon: 'success',
            iconColor: 'blue',
            title: 'Congrats, Register Success!',
            background: 'azure'
          })
        })
        .catch((err) => {
          toast.fire({
            icon: 'error',
            title: err.response.data.message,
            background: 'mistyrose'
          })
        })
    },
    fetchCard (context) {
      axios({
        method: 'GET',
        url: '/barbershops'
      })
        .then(({ data }) => {
          context.commit('setCards', { cards: data })
        })
        .catch(err => {
          toast.fire({
            icon: 'error',
            title: err.response.data.message,
            background: 'mistyrose'
          })
        })
    },
    formAppointment (context, id) {
      context.commit('setServiceId', id)
      router.push({ name: 'Add' })
    },
    postAppointment (context, payload) {
      axios({
        method: 'POST',
        url: `/appointments/${payload.BarberShopId}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ServiceId: payload.ServiceId,
          BarberId: payload.username,
          date: payload.date,
          scheduleStart: payload.scheduleStart
        }
      })
        .then(({ data }) => {
          router.push({ name: 'Home' })

          toast.fire({
            icon: 'success',
            iconColor: 'blue',
            title: 'Success, you ready have an Appointment!',
            background: 'azure'
          })
        })
        .catch((err) => {
          toast.fire({
            icon: 'error',
            title: err.response.data.message,
            background: 'mistyrose'
          })
        })
    },
    // deleteCart (context, id) {
    //   if (confirm('Delete This Cart?')) {
    //     axios.delete(`/carts/${id}`, {
    //       headers: {
    //         access_token: localStorage.access_token
    //       }
    //     })
    //       .then(() => {
    //         toast.fire({
    //           icon: 'success',
    //           iconColor: 'blue',
    //           title: 'Cart deleted!',
    //           background: 'azure'
    //         })
    //         this.dispatch('fetchCart')
    //         router.push({ name: 'Cart' })
    //       })
    //       .catch(err => {
    //         toast.fire({
    //           icon: 'error',
    //           title: err.response.data.message,
    //           background: 'mistyrose'
    //         })
    //       })
    //   }
    // },
    // fetchCart (context) {
    //   axios({
    //     method: 'GET',
    //     url: '/carts',
    //     headers: {
    //       access_token: localStorage.access_token
    //     }
    //   })
    //     .then(({ data }) => {
    //       context.commit('setCarts', { carts: data })
    //       let count = 0
    //       data.forEach(element => {
    //         count = count + element.quantity
    //       })
    //       context.dispatch('setCartCount', count)
    //     })
    //     .catch(err => {
    //       toast.fire({
    //         icon: 'error',
    //         title: err.response.data.message,
    //         background: 'mistyrose'
    //       })
    //     })
    // },
    // setCartCount (context, count) {
    //   context.commit('setCartCount', count)
    // },
    booking (context, object) {
      context.commit('setBooking', object)
      router.push({ name: 'Booking' })
    }
    // plusCart (context, id) {
    //   axios({
    //     method: 'POST',
    //     url: '/carts',
    //     headers: {
    //       access_token: localStorage.access_token
    //     },
    //     data: {
    //       ProductId: id
    //     }
    //   })
    //     .then(({ data }) => {
    //       toast.fire({
    //         icon: 'success',
    //         title: 'Success Added to Cart!'
    //       })
    //       this.dispatch('fetchCard')
    //       this.dispatch('fetchCart')
    //       router.push({ name: 'Cart' })
    //     })
    //     .catch(err => {
    //       toast.fire({
    //         icon: 'error',
    //         title: err.response.data.message,
    //         background: 'mistyrose',
    //         timer: 3000
    //       })
    //     })
    // },
    // updateCart (context, payload) {
    //   if (payload.quantity < 0) {
    //     toast.fire({
    //       icon: 'error',
    //       title: 'Cant input stock less than 0',
    //       background: 'mistyrose',
    //       timer: 3000
    //     })
    //   } else {
    //     axios({
    //       method: 'PATCH',
    //       url: `/carts/${payload.id}`,
    //       headers: {
    //         access_token: localStorage.access_token
    //       },
    //       data: {
    //         quantity: payload.quantity
    //       }
    //     })
    //       .then(({ data }) => {
    //         toast.fire({
    //           icon: 'success',
    //           title: 'Success Added to Cart!'
    //         })
    //         this.dispatch('fetchCart')
    //         router.push({ name: 'Cart' })
    //       })
    //       .catch(err => {
    //         toast.fire({
    //           icon: 'error',
    //           title: err.response.data.message,
    //           background: 'mistyrose',
    //           timer: 3000
    //         })
    //       })
    //   }
    // }
  }
})
export default store
