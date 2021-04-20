import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    emaillogin: '',
    userid: '',
    tournamentid: '',
    Tournament: [],
    bracket: [],
    team: [],
  },
  mutations: {
    increment (state) {
      state.count++
    },
    GET_EMAIL_LOGIN (state, payload) {
      state.emaillogin = payload.email
      state.userid = payload.userid
    },
    FETCH_TOURNAMENT_ID (state, payload) {
      state.tournamentid = payload.TournamentId
    },
    FETCH_TOURNAMENT (state, payload) {
      state.Tournament = payload.Tournament
    },
    FETCH_TEAM (state, payload) {
      state.team = payload.team
    },
    FETCH_BRACKET (state, payload) {
      state.bracket = payload.bracket
    }
  },
  actions: {
    register (context, payload) {
      axios.post('register', {
        email: payload.email,
        password: payload.password
      })
        .then(() => {
          router.push({ name: 'Login' })
        })
    },

    login (context, payload) {
      axios.post('login', {
        email: payload.email,
        password: payload.password
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('emailogin', payload.email)
          localStorage.setItem('userid', response.data.id)
          context.commit('GET_EMAIL_LOGIN', { email: payload.email, userid: response.data.id })
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    
    logout(context) {
      localStorage.clear()
      context.commit('GET_EMAIL_LOGIN', { email: '' })
      router.push({ name: 'Login' })
    },

    AddTournament (context, payload) {
      axios.post('tournament', payload, {
        headers: { access_token: localStorage.access_token }
      })
        .then(() => {
          this.dispatch('FetchTournament')
          router.push({ name: 'Tournament' })
        })
        .catch((err) => {
          console.log(err.message)
        })
    },

    FetchTournament (context) {
      axios.get('tournament')
        .then((response) => {
          context.commit('FETCH_TOURNAMENT', { Tournament: response.data })
        })
        .catch((err) => {
          console.log(err)
        })
    },

    FetchTeam (context) {
      axios.get('team', {
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          context.commit('FETCH_TEAM', { team: response.data })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },

    AddTeam (context, payload) {
      axios.post('team', payload, {
        headers: { access_token: localStorage.access_token }
      })
      .then(() => {
        this.dispatch('FetchTeam')
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    FetchBracket (context) {
      axios.get(`tournament/${this.state.tournamentid}`)
        .then((response) => {
          context.commit('FETCH_BRACKET', { bracket: response.data })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },

    MakeBracket (context, payload) {
      axios.post('bracket', payload, {
        headers: { access_token: localStorage.access_token }
      })
      .then((response) => {
        console.log(response)
        this.dispatch('FetchBracket')
        router.push({ name: 'Tournament' })
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
  }
})

export default store