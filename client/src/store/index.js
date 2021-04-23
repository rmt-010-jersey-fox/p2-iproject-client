import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    diseases: [],
    patients: [],
    weathers: [],
    patient: {
      id: '',
      name: '',
      date_of_birth: '',
      gender: '',
      DiseaseId: ''
    }
  },
  mutations: {
    getPatientsData (state, payload) {
      state.patients = payload
    },
    getDiseaseData (state, payload) {
      state.diseases = payload
    },
    getWeatherData (state, payload) {
      state.weathers = payload
    },
    toEditPatientPage (state, payload) {
      state.patient.id = payload.id
      state.patient.name = payload.name
      state.patient.date_of_birth = payload.date_of_birth
      state.patient.gender = payload.gender
      state.patient.DiseaseId = payload.DiseaseId
    }
  },
  actions: {
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(response => {
          // console.log(response)
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios
        .post('/register', payload)
        .then(response => {
          console.log(response)
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    toRegisterPage (context, payload) {
      router.push('/register')
    },
    toLoginPage (context, payload) {
      router.push('/login')
    },
    logout (context, payload) {
      localStorage.clear()
      router.push('/login')
    },
    getPatientsData (context, payload) {
      axios
        .get('/patient', { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response.data)
          context.commit('getPatientsData', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDiseaseData (context, payload) {
      axios
        .get('/disease', { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response.data)
          context.commit('getDiseaseData', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeStatusToTrue (context, payload) {
      axios
        .patch(`/patient/${payload}/dispatch`, payload, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response)
          axios
            .get('/patient', { headers: { access_token: localStorage.access_token } })
            .then(response => {
              console.log(response.data)
              context.commit('getPatientsData', response.data)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeStatusToFalse (context, payload) {
      axios
        .patch(`/patient/${payload}/survey`, payload, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          axios
            .get('/patient', { headers: { access_token: localStorage.access_token } })
            .then(response => {
              console.log(response.data)
              context.commit('getPatientsData', response.data)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deletePatient (context, payload) {
      axios
        .delete(`/patient/${payload}`, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response)
          axios
            .get('/patient', { headers: { access_token: localStorage.access_token } })
            .then(response => {
              console.log(response.data)
              context.commit('getPatientsData', response.data)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteDisease (context, payload) {
      axios
        .delete(`/disease/${payload}`, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response)
          axios
            .get('/disease', { headers: { access_token: localStorage.access_token } })
            .then(response => {
              console.log(response.data)
              context.commit('getDiseaseData', response.data)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    toAddPatientPage (context, payload) {
      router.push('/addPatient')
    },
    showHomepage (context, payload) {
      router.push('/')
    },
    toDiseaseData (context, payload) {
      router.push('/addDisease')
    },
    toShowDiseasePage (context, payload) {
      router.push('/disease')
    },
    addPatientData (context, payload) {
      axios
        .post('/patient', payload, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addDiseaseData (context, payload) {
      axios
        .post('/disease', payload, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    toEditPatientPage (context, payload) {
      axios
        .get(`/patient/${payload}`, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response)
          router.push('/editPatient')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editPatientData (context, payload) {
      axios
        .put(`/patient/${payload}`, this.state.patient, { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getWeatherData (context, payload) {
      axios
        .get('/weather', { headers: { access_token: localStorage.access_token } })
        .then(response => {
          console.log(response.data)
          context.commit('getWeatherData', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
