import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vacations: [],
    destinations: [],
    photos: null,
    city: '',
    googleDestinations: []
  },
  mutations: {
    getVacations (state, payload) {
      state.vacations = payload
    },
    getPhotos (state, payload) {
      state.photos = payload
    },
    getDestinations (state, payload) {
      state.destinations = payload
    },
    getCity (state, payload) {
      state.city = payload
    },
    setDestinList (state, payload) {
      state.googleDestinations = payload
    }
  },
  actions: {
    loginSubmit (context, payload) {
      return axios
        .post('/login', payload)
    },
    registerSubmit (context, payload) {
      return axios
        .post('/register', payload)
    },
    fetchVacation (context) {
      axios
        .get('/vacations', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('getVacations', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addVacation (context, payload) {
      return axios
        .post('/vacations', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    fetchPhotos (context, payload) {
      return axios
        .get(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${payload}&maxheight=1600&key=AIzaSyDdhXP71_k54Ne9EqpdixcsjyhqSAz9Yqc`)
        .then(data => {
          context.commit('getPhotos', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteVacation (context, id) {
      return axios
        .delete(`/vacations/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    getOneVacation (context, id) {
      return axios
        .get(`/vacations/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    editVacation (context, payload) {
      const data = {
        start_date: payload.start_date,
        end_date: payload.end_date
      }
      return axios
        .put(`/vacations/${payload.id}`, data, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    fetchUserDestination (context, id) {
      return axios
        .get(`/destinations/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('getDestinations', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchDestinationList (context, id) {
      return axios
        .get(`/destinations-list/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
          context.commit('setDestinList', data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteDestination (context, id) {
      return axios
        .delete(`/destinations/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    addDestinations (context, payload) {
      return axios
        .post(`/destinations/${payload.id}`, { place_name: payload.place_name }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    }
  }
})
