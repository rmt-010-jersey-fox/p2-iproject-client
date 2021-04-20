<template>
  <body>
    <div id="app">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link> |
      </div> -->
      <Navbar/>
      <router-view style="height: 89.5vh;"/>
    </div>
    <HFooter></HFooter>
  </body>
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
    if (localStorage.access_token) {
      this.$store.commit('GET_EMAIL_LOGIN', { email: localStorage.emailogin, userid: +localStorage.userid })
    }
    this.$store.dispatch('FetchTeam')
    this.$store.dispatch('FetchTournament')
    if (localStorage.TournamentId) {
      this.$store.commit('FETCH_TOURNAMENT_ID', { TournamentId: localStorage.TournamentId})
      this.$store.dispatch('FetchBracket')
    }
  }
}
</script>
<style>
html, body {
  background-image: url('./assets/bg.jpg')
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
