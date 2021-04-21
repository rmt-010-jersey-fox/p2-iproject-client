<template>
  <div id="app">
    <Navbar/>
      <router-view style="height: 86vh;"/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'App',
  components: {
    Navbar,
    HFooter
  },
  created () {
    this.$store.dispatch('FetchTournament')
    if (localStorage.access_token) {
      this.$store.commit('GET_EMAIL_LOGIN', { email: localStorage.emailogin, userid: +localStorage.userid })
    }
    if (localStorage.TournamentId) {
      this.$store.dispatch('FetchTeam')
      // this.$store.commit('FETCH_TOURNAMENT_ID', { TournamentId: localStorage.TournamentId})
      this.$store.dispatch('FetchBracket', { TournamentId: localStorage.TournamentId })
    }
  }
}
</script>
<style>
html, body {
  background-image: url('./assets/bg.jpg')
}

h2 {
  color: whitesmoke
}

.row {
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
