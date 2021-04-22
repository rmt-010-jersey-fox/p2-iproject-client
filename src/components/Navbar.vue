<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto" v-hide="currentRoute === 'Home'">
          <li class="nav-item">
            <router-link :to="{name: 'Playlists'}" class="nav-link">Playlists</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Songs'}" class="nav-link">Songs</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    home () {
      this.$router.push({ name: 'Home' })
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name
    }
  }
}
</script>

<style>
.navbar {
  background-color: #01064a;
}
</style>
