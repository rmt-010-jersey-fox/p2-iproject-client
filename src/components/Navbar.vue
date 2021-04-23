<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a @click.prevent="backToHome" class="navbar-brand" style="cursor: pointer;">
      <img src="../../public/paperplane.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Trip-Planer
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <button class="btn btn-primary" @click="goToCityForm">Add City</button>
      </div>
    </div>
    <button class="btn btn-outline-danger" @click.prevent="loggingOff">Logout</button>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToCityForm () {
      this.$router.push('/add-vacation')
    },
    loggingOff () {
      localStorage.clear()
      this.$router.push('/login')
    },
    backToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
