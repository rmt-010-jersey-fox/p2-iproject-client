<template>
  <!-- NAVIGATION BAR -->
    <section id="navigation-bar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link class="navbar-brand" to="/">PIXELATES</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">HOME
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/gallery">GALLERIES</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/favourites">FAVOURITES</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/add">SUBMIT</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/discover">DISCOVER</router-link>
                </li>
              </ul>
            </div>
            <button @click="handleLogout" class="btn btn-danger my-2 my-sm-0" type="button">LOGOUT</button>
          </nav>
    </section>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    handleLogout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('setLogin', false)
    }
  }
}
</script>

<style>

</style>
