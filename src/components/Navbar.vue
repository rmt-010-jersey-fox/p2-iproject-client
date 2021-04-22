<template>
  <section class="navbar">
    <div class="navbar-item">
      <router-link to="/"><p class="navbar-link app-title">My FPL Helper</p></router-link>
    </div>
    <div class="navbar-item"></div>
    <div v-if="loggedIn" class="navbar-item">
      <router-link to="/myTeam"><p class="navbar-link">My FPL Team</p></router-link>
    </div>
    <div class="navbar-item"></div>
    <div class="navbar-item"></div>
    <div class="navbar-item"></div>
    <div v-if="loggedIn" class="navbar-item">
      <router-link to="/login"><p @click.prevent="logout" class="navbar-link" href="#">Logout</p></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.dispatch('confirmLogin', false)
      this.$router.push({ name: 'Landing' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
