import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ayatSurahs: [],
    hadists: []
  },
  mutations: {
    FETCH_AYAT (state, data) {
      state.ayatSurahs = data
    },
    FETCH_HADIST (state, data) {
      state.hadists = data
    }
  },
  actions: {
    login (context, payload) {
      axios.post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },

    register (context, payload) {
      axios.post('/register', payload)
        .then(({ data }) => {
          console.log('Berhasil Register')
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
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
        })
        .catch(err => {
          console.log(err)
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
        })
        .catch(err => {
          console.log(err)
        })
    },

    logout (context) {
      localStorage.removeItem('access_token')
      router.push('/login')
    }
  },
  modules: {
  }
})
