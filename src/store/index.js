
import Vue from 'vue'
import Vuex from 'vuex'
import baseUrl from '../axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tokenUser: '',
    listBusines: [],
    dataLogin: '',
    listCategory: [],
    initialValue: '',
    listInvest: [],
    listUser: [],
    location: ''
  },
  mutations: {
    setTokenUser(state, payload) {
      state.tokenUser = payload
    },
    setListBusines(state, payload) {
      state.listBusines = payload
    },
    setDataLogin(state, payload) {
      state.dataLogin = payload
    },
    setListCategory(state, payload) {
      state.listCategory = payload
    },
    setInitialValue(state, payload) {
      state.initialValue = payload
    },
    setListInvest(state, payload) {
      state.listInvest = payload
    },
    setListUser(state, payload) {
      state.listUser = payload
    },
    setLocation(state, payload) {
      state.location = payload
    }
  },
  actions: {
    submitInvest(context, data) {
      return baseUrl({
        method: 'POST',
        url: '/payments',
        data: {
          total_invest: data.total_invest,
          BusinesId: data.id
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    register(context, payload) {
      return baseUrl({
        method: 'POST',
        url: '/register',
        data: {
          full_name: payload.full_name,
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchData(context) {
      baseUrl({
        method: 'GET',
        url: '/business'
      })
      .then(({ data }) => {
        context.commit('setListBusines', data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    login(context, payload) {
      return baseUrl({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchCategory(context) {
      baseUrl({
        method: 'GET',
        url: '/categories'
      })
      .then(({ data }) => {
        context.commit('setListCategory', data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    postBusines(context, payload) {
      return baseUrl({
        method: 'POST',
        url: '/business',
        data: {
          name: payload.name,
          CategoryId: payload.CategoryId,
          photo_url: payload.photo_url,
          description: payload.description,
          total_saham: payload.total_saham,
          deviden: payload.deviden,
          deviden_periode: payload.deviden_periode,
          address: payload.address
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchDataById(context, id) {
      return baseUrl({
        method: 'GET',
        url: '/business/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchDataInvest(context) {
      baseUrl({
        method: 'GET',
        url: '/invests'
      })
      .then(({ data }) => {
        context.commit('setListInvest', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    deleteBusines(context, id) {
      return baseUrl({
        method: 'DELETE',
        url: '/business/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    updateBusines(context, id) {
      return baseUrl({
        method: 'PUT',
        url: '/business/' + id,
        data: {
          name: this.state.initialValue.name,
          CategoryId: this.state.initialValue.Category.id,
          photo_url: this.state.initialValue.photo_url,
          description: this.state.initialValue.description,
          total_saham: this.state.initialValue.total_saham,
          deviden: this.state.initialValue.deviden,
          deviden_periode: this.state.initialValue.deviden_periode,
          address: this.state.initialValue.address
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchDataUser(context) {
      baseUrl({
        method: 'GET',
        url: '/users'
      })
      .then(({ data }) => {
        context.commit('setListUser', data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    fetchLocation(context, data) {
      return baseUrl({
        method: 'POST',
        url: '/locations',
        auth: {
          username: 'SB-Mid-server-Fwux1o9E4GQQGZoFKUafAkac'
        },
        data: {
          search: data
        }
      })
    }
  }
})

export default store
