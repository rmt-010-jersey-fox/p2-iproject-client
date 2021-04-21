import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Register',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Login' })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`,
          })
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
          this.dispatch('FetchTeam')
          router.push({ name: 'Home' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Login',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`,
          })
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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tournament has been Registered',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Tournament' })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`,
          })
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
          localStorage.setItem('TournamentId', response.data[0].TournamentId)
          context.commit('FETCH_TOURNAMENT_ID', { TournamentId: response.data[0].TournamentId })
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Team has been Added',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
        })
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bracket has been made',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
        })
      })
    },

    advancedteam(context, payload) {
      axios.post(`bracket/${payload.id}`, {}, {
        headers: { access_token: localStorage.access_token }
      })
      .then(() => {
        this.dispatch('FetchBracket', { TournamentId: this.state.tournamentid })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'This Team has advanced to next bracket',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
        })
      })
    },

    finishTournament (context, payload) {
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`tournament/${payload.id}`, {
            headers: { access_token: localStorage.access_token }
          })
          .then(() => {
            this.dispatch('FetchTournament')
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'This Tournament has Finished',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${err.response.data.message}`,
            })
          })
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your Tournament is safe :)',
            'error'
          )
        }
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