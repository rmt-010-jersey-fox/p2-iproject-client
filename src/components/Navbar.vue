<template>
  <section class="navbar">
    <div class="navbar-item">
      <a class="navbar-link" href="#">My FPL Team Checker</a>
    </div>
    <div v-if="loggedIn" class="navbar-item">
      <a class="navbar-link" href="#">My FPL Team</a>
    </div>
    <div v-if="loggedIn" class="navbar-item">
      <a class="navbar-link" href="#">Highlights</a>
    </div>
    <div class="navbar-item"></div>
    <div class="navbar-item"></div>
    <div v-if="loggedIn" class="navbar-item">
      <a @click.prevent="logout" class="navbar-link" href="#">Logout</a>
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
