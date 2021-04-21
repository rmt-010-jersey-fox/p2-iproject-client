import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ayatSurahs: [],
    hadists: [],
    jadwalSolat: {},
    jadwalSolatUp: {}
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
    },
    FETCH_JADWAL_SOLAT_UP (state, data) {
      state.jadwalSolatUp = data
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
        })
        .catch(err => {
          console.log(err)
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
    }
  },
  modules: {
  }
})
