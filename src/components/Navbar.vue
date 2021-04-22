<template>
  <nav v-if="isLogin" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="nav-link text-white active" to="/">MovieApp</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/watchlists">Watchlists</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/latest">Latest Movie</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapState(['isLogin'])
  }
}
</script>

<style scoped>
</style>
