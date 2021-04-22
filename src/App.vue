<template>
  <div id="app">
    <Navbar />
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Header from './components/Header'
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    HFooter
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('setLogin', { status: true })
      this.$store.commit('setUsername', { username: localStorage.username })
      // this.$store.dispatch('fetchCart')
    } else {
      this.$store.commit('setLogin', { status: false })
    }
  },
  computed: {
    // countCart () {
    //   return this.$store.state.cartCount
    // }
  }
}
</script>
<style>
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
