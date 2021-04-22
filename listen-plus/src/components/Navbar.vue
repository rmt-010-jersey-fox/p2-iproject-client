<template>
  <!-- Nav Bar -->
  <section>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/playlist">My Playlist</router-link> |
      <router-link to="/register">Register</router-link> |
      <a @click.prevent="logOut()" href="/">Log Out</a>
    </div>
  <!-- Website Name -->
    <h2>Listen+</h2>
  </section>
</template>

<script>
import router from '../router'

export default {
  name: 'Navbar',
  methods: {
    logOut () {
      localStorage.clear()
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #EDDDC6;
}
</style>
