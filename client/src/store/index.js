import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    provinsi: ['Aceh - Banda Aceh', 'Sumatera Utara - Medan', 'Sumatera Barat - Padang', 'Riau - Pekanbaru', 'Kepulauan Riau - Tanjungpinang', 'Jambi', 'Sumatera Selatan - Palembang', 'Kepulauan Bangka Belitung - Pangkal Pinang', 'Bengkulu - Bengkulu', 'Lampung - Bandar Lampung', 'DKI Jakarta - Jakarta', 'Banten - Serang', 'Jawa Barat - Bandung', 'Jawa Tengah - Semarang', 'DI Yogyakarta - Yogyakarta', 'Jawa Timur - Surabaya', 'Bali - Denpasar', 'Nusa Tenggara Barat - Mataram', 'Nusa Tenggara Timur - Kupang', 'Kalimantan Barat - Pontianak', 'Kalimantan Tengah - Palangkaraya', 'Provinsi Kalimantan Selatan - Banjarmasin', 'Kalimantan Timur - Samarinda', 'Kalimantan Utara - Tanjung Selor', 'Sulawesi Utara - Manado', 'Gorontalo - Gorontalo', 'Sulawesi Tengah - Palu', 'Sulawesi Barat - Mamuju', 'Provinsi Sulawesi Selatan - Makassar', 'Sulawesi Tenggara - Kendari', 'Maluku - Ambon', 'Maluku Utara - Sofifi', 'Papua Barat - Manokwari', 'Papua - Jayapura'],
    CarByLoc: []
  },
  mutations: {
    setLogin (state, payload) {
      state.isLogin = payload
    },
    CarByLoc (state, payload) {
      state.CarByLoc = payload.data
    }
  },
  actions: {
    getCarsByLocation ({ commit }, data) {
      console.log(data, 'masuk gak')
      axios({
        method: 'POST',
        url: 'rentals',
        data: { address: data.location }
      })
        .then(data => {
          commit('CarByLoc', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
