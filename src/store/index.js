import Vue from 'vue'
import axios from '../../axios/axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    count: 33,
    matches: [],
    highlights: [],
    players: [],
    playersOptions: {
      goalkeeperOptions: [],
      defenderOptions: [],
      midfielderOptions: [],
      attackerOptions: []
    }
  },
  mutations: {
    setLogin (state, boolean) {
      state.loggedIn = boolean
    },
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    setMatches (state, payload) {
      state.matches = payload
    },
    setHighlights (state, payload) {
      state.highlights = payload
    },
    setPlayers (state, payload) {
      state.players = payload
    },
    setPlayersOptions (state, payload) {
      state.playersOptions = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email, password
        }
      })
    },
    increment (context) {
      context.commit('increment')
    },
    decrement (context) {
      context.commit('decrement')
    },
    confirmLogin (context, boolean) {
      context.commit('setLogin', boolean)
    },
    register (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          email, password
        }
      })
    },
    getMatches (context) {
      axios({
        method: 'GET',
        url: `schedules/${context.state.count}`
      })
        .then(res => {
          console.log(res.data.matches)
          context.commit('setMatches', res.data.matches)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getHighlights (context) {
      axios({
        method: 'GET',
        url: '/highlights'
      })
        .then(res => {
          context.commit('setHighlights', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSquad (context) {
      axios({
        method: 'GET',
        url: '/mySquad',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(res => {
          context.commit('setPlayers', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPlayersByPosition (context, position) {
      axios({
        method: 'GET',
        url: `/player/${position}`
      })
        .then(({ data }) => {
          context.commit('setPlayersOptions', {
            ...context.state.playersOptions, [position.toLowerCase() + 'Options']: data.players
          })
        })
    },
    addPlayer (context, payload) {
      const { newPlayerId } = payload
      return axios({
        method: 'POST',
        url: `/mySquad/${newPlayerId}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    changePlayer (context, payload) {
      const { oldPlayerId, newPlayerId } = payload
      return axios({
        method: 'PUT',
        url: `/mySquad/${oldPlayerId}`,
        data: {
          PlayerId: newPlayerId
        },
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    deletePlayer (context, payload) {
      const { PlayerId } = payload
      return axios({
        method: 'DELETE',
        url: `/mySquad/${PlayerId}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
    }
  },
  modules: {
  }
})
