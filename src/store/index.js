import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

const defaultState = () => {
  return {
    emaillogin: '',
    userid: '',
    tournamentid: '',
    Tournament: [],
    bracket: [],
    team: [],
    bracketforviewers: [],
    NewsAndTwitt : {}
  }
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    emaillogin: '',
    userid: '',
    tournamentid: '',
    Tournament: [],
    bracket: [],
    team: [],
    bracketforviewers: [],
    NewsAndTwitt : {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    RESET_STATE (state) {
      Object.assign(state, defaultState())
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
    },
    FETCH_BRACKET_VIEWERS (state, payload) {
      state.bracketforviewers = payload.bracket
    },
    FETCH_NEWS_TWEET (state, payload) {
      state.NewsAndTwitt = payload.NewsAndTwitt
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
          this.dispatch('FetchTournament')
          this.dispatch('FetchTeam')
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    
    logout(context) {
      localStorage.clear()
      context.commit('RESET_STATE')
      router.push({ name: 'Login' })
    },

    AddTournament (context, payload) {
      let input = {
        name: payload.name,
        description: payload.description,
        game: payload.selected
      }
      axios.post('tournament', input, {
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          this.dispatch('FetchTournament')
          context.commit('FETCH_TOURNAMENT_ID', { TournamentId: localStorage.TournamentId})
          localStorage.setItem('TournamentId', response.data.id)
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

    FetchBracket (context, payload) {
      axios.get(`tournament/${payload.TournamentId}`)
        .then((response) => {
          context.commit('FETCH_BRACKET', { bracket: response.data })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },

    FetchBracketForViewers (context, payload) {
      axios.get(`tournament/${payload.TournamentId}`)
        .then((response) => {
          context.commit('FETCH_BRACKET_VIEWERS', { bracket: response.data })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },

    MakeBracket (context, payload) {
      axios.post('bracket', payload, {
        headers: { access_token: localStorage.access_token }
      })
      .then(() => {
        this.dispatch('FetchBracket', { TournamentId: this.state.tournamentid })
        router.push({ name: 'Tournament' })
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    advancedteam(context, payload) {
      axios.post(`bracket/${payload.id}`, {}, {
        headers: { access_token: localStorage.access_token }
      })
      .then(() => {
        this.dispatch('FetchBracket', { TournamentId: this.state.tournamentid })
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    addScore (context, payload) {
      axios.patch(`bracket/${payload.id}`, {}, {
        headers: { access_token: localStorage.access_token }
      })
      .then(() => {
        this.dispatch('FetchBracket', { TournamentId: this.state.tournamentid })
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    finishTournament (context, payload) {
      axios.delete(`tournament/${payload.id}`, {
        headers: { access_token: localStorage.access_token }
      })
      .then(() => {
        this.dispatch('FetchTournament')
      })
      .catch((err) => {
        console.log(err.response)
      })
    },

    getTwitterAndNews (context, payload) {
      axios.get(`twitter/${payload.id}`)
      .then((response) => {
        context.commit('FETCH_NEWS_TWEET', { NewsAndTwitt: response.data })
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
  }
})

export default store