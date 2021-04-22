import Vue from 'vue'
import Vuex from 'vuex'
// import Swal from 'sweetalert2'
import axios from '../API/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: [],
    resultRated: [],
    resultUpcoming: [],
    detailPopular: [],
    isLogin: false
  },
  mutations: {
    fetchPopular (state, payload) {
      state.result = payload.popular
    },
    changePage (state, payload) {
      state.isLogin = payload.login
    },
    fetchTopRated (state, payload) {
      state.resultRated = payload.TopRated
    },
    fetchUpcoming (state, payload) {
      state.resultUpcoming = payload.Upcoming
    },
    fetchDetailPopular (state, payload) {
      state.detailPopular = payload.detailPopular
    }
  },
  actions: {
    fetchDataPopular (context) {
      axios({
        method: 'GET',
        url: '/movies/popular',
        headers: {
          access_token: localStorage.access_token,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
        }
      })
        .then((response) => {
          // console.log(response, 'INI DATA RESPONSE')
          context.commit('fetchPopular', { popular: response.data })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchDataTopRated (context) {
      axios({
        method: 'GET',
        url: '/movies/top_rated',
        headers: {
          access_token: localStorage.access_token,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
        }
      })
        .then((response) => {
          context.commit('fetchTopRated', { TopRated: response.data })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchDataUpcoming (context) {
      axios({
        method: 'GET',
        url: '/movies/upcoming',
        headers: {
          access_token: localStorage.access_token,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
        }
      })
        .then((response) => {
          context.commit('fetchUpcoming', { Upcoming: response.data })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDetailPopular (context, payload) {
      // console.log(payload.id, 'INI PUNYA ID')
      axios({
        method: 'GET',
        url: `/movies/${payload.id}`,
        headers: {
          access_token: localStorage.access_token,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJkNzM2ZGQzODJiN2I5Njg4YTFkNmVhYmEyYjdjYyIsInN1YiI6IjYwNjc3YWJhMGQyZjUzMDA2ZTA2NTdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xROjvugUQL2A8z-U97j-teMVXEpIdOtm8GPYHMUhiZw'
        }
      })
        .then((response) => {
          // console.log(response.data, 'INI DARI STORE')
          // console.log(response.data, 'ini utk video')
          context.commit('fetchDetailPopular', { detailPopular: response.data })
          router.push('/detailMovies')
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // login (context, payload) {
    //   axios({
    //     method: 'POST',
    //     url: '/login',
    //     data: payload
    //   })
    //     .then((response) => {
    //       // localStorage.access_token = response.data.
    //       localStorage.setItem('access_token', response.data.access_token)
    //       context.commit('changePage', { login: true })
    //       router.push('/')
    //       Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Successfully login',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //     })
    //     .catch(() => {
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Something went wrong!'
    //       })
    //     })
    // },
    // register (context, payload) {
    //   axios({
    //     method: 'POST',
    //     url: '/register',
    //     data: payload
    //   })
    //     .then((response) => {
    //       router.push('/login')
    //       Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Successfully daftar',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //     })
    //     .catch(() => {
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Something went wrong!'
    //       })
    //     })
    // },
    // logout (context) {
    //   localStorage.removeItem('access_token')
    //   context.commit('changePage', { login: false })
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'terima kasih sudah berkunjung :)',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }
  },
  modules: {
  }
})
