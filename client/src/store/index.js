import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    provinsi: ['Aceh - Banda Aceh', 'Sumatera Utara - Medan', 'Sumatera Barat - Padang', 'Riau - Pekanbaru', 'Kepulauan Riau - Tanjungpinang', 'Jambi', 'Sumatera Selatan - Palembang', 'Kepulauan Bangka Belitung - Pangkal Pinang', 'Bengkulu - Bengkulu', 'Lampung - Bandar Lampung', 'DKI Jakarta - Jakarta', 'Banten - Serang', 'Jawa Barat - Bandung', 'Jawa Tengah - Semarang', 'DI Yogyakarta - Yogyakarta', 'Jawa Timur - Surabaya', 'Bali - Denpasar', 'Nusa Tenggara Barat - Mataram', 'Nusa Tenggara Timur - Kupang', 'Kalimantan Barat - Pontianak', 'Kalimantan Tengah - Palangkaraya', 'Provinsi Kalimantan Selatan - Banjarmasin', 'Kalimantan Timur - Samarinda', 'Kalimantan Utara - Tanjung Selor', 'Sulawesi Utara - Manado', 'Gorontalo - Gorontalo', 'Sulawesi Tengah - Palu', 'Sulawesi Barat - Mamuju', 'Provinsi Sulawesi Selatan - Makassar', 'Sulawesi Tenggara - Kendari', 'Maluku - Ambon', 'Maluku Utara - Sofifi', 'Papua Barat - Manokwari', 'Papua - Jayapura'],
    CarByLoc: [],
    start_date: '',
    end_date: '',
    location: '',
    car: []
  },
  mutations: {
    setLogin (state, payload) {
      state.isLogin = payload
    },
    CarByLoc (state, payload) {
      state.CarByLoc = payload.data
    },
    setCarByLoc (state, payload) {
      state.CarByLoc = payload
    },
    start_date (state, payload) {
      state.start_date = payload
    },
    end_date (state, payload) {
      state.end_date = payload
    },
    location (state, payload) {
      state.location = payload
    },
    car (state, payload) {
      state.car = payload.data
    }
  },
  actions: {
  },
  modules: {
  }
})
