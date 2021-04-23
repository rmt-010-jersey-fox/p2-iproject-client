<template>
  <div id="app">
    <Navbar v-if="isLoggedIn"/>
    <router-view/>
    <HFooter/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import HFooter from 'vue-hacktiv-footer'
export default {
  components: {
    Navbar,
    HFooter
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style>
#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: whitesmoke;
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
