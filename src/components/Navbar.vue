<template>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a style="color:white" class="nav-link" href="#" @click.prevent="changepage('Home')">Home</a>
        </li>
        <li class="nav-item row" v-if="emailogin !== ''">
          <a style="color:white" class="nav-link col-6" href="#" @click.prevent="changepage('Tournament')">MyTournament</a>
          <a style="color:white" class="nav-link col-5 offset-1" href="#" @click.prevent="changepage('Team')">MyTeams</a>
        </li>
        <li class="nav-item offset-1 row" v-else>
          <a style="color:white" class="nav-link col-6" @click.prevent="changepage('Register')" href="#">Register</a>
          <a style="color:white" class="nav-link offset-1 col-5" @click.prevent="changepage('Login')"  href="#">Login</a>
        </li>
      </ul>
      <span class="navbar-text" v-if="emailogin !== ''">
        {{emailogin}}
        <a href="#" @click.prevent="logout">Logout</a>
      </span>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    changepage(name) {
      if(this.$route.name !== name) {
        this.$router.push({ name })
      }
    },
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    emailogin () {
      return this.$store.state.emaillogin
    }
  }
}
</script>

<style scoped>

</style>