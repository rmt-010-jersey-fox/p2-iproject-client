import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ayatSurahs: [],
    hadists: [],
    jadwalSolat: {}
  },
  mutations: {
    FETCH_AYAT (state, data) {
      state.ayatSurahs = data
    },
    FETCH_HADIST (state, data) {
      state.hadists = data
    },
    FETCH_JADWAL_SOLAT (state, data) {
      state.jadwalSolat = data
    }
  },
  actions: {
    login (context, payload) {
      axios.post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Login in successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
        })
    },

    register (context, payload) {
      axios.post('/register', payload)
        .then(({ data }) => {
          console.log('Berhasil Register')
          router.push('/login')

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Register in successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please try again',
            text: `${err.response.data.message}`
          })
        })
    },

    googleLogin (context, payload) {
      axios.post('/googleLogin', payload)
        .then((response) => {
          console.log(response)
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Login in successfully'
          })
        })
        .catch((err) => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please try again',
            text: `${err.response.data.message}`
          })
        })
    },

    getSurah (context, payload) {
      // console.log(payload, '<<<<< MASUK KE STORE')
      axios.post('/surah', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<< CLIENT MASUK')
          if (payload.ayat === '') {
            context.commit('FETCH_AYAT', data.verses)
          } else {
            const arr = []
            arr.push(data)
            context.commit('FETCH_AYAT', arr)
          }
          // context.dispatch('fetchSurah')
          router.push('/surah').catch(() => {})
          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Get Surah in successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please try again',
            text: `${err.response.data.message}`
          })
        })
    },

    getHadist (context, payload) {
      console.log(payload)
      axios.post('/hadist', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, 'Di Store')
          const arr = []
          arr.push(data)
          context.commit('FETCH_HADIST', arr)

          router.push('/hadist').catch(() => {})

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Get Hadist in successfully'
          })
        })
        .catch(err => {
          console.log(err)
          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please try again',
            text: `${err.response.data.message}`
          })
        })
    },

    getJadwalSolat (context, payload) {
      // console.log(payload)
      const day = +payload.date.split('-')[2]
      const month = +payload.date.split('-')[1]
      const year = +payload.date.split('-')[0]
      // console.log(day, month, year)
      const newPayload = {
        day: day,
        month: month,
        year: year,
        place: payload.place
      }
      axios.post('/jadwalSolat', newPayload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data.data, '<<< Di Jadwal Solatttt')
          // const arr = []
          // arr.push(data.data)
          context.commit('FETCH_JADWAL_SOLAT', data)

          router.push('/').catch(() => {})

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Get Pray Time in successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please try again',
            text: `${err.response.data.message}`
          })
        })
    },

    fetchJadwalSolat (context, payload) {
      axios.get('/jadwalsolatUp', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_JADWAL_SOLAT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    logout (context) {
      localStorage.removeItem('access_token')
      router.push('/login')

      // Sweetalert
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Logout in successfully'
      })
    }
  },
  modules: {
  }
})
