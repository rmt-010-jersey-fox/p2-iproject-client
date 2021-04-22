<template>
  <div id="app">
    <Navbar />
    <Footer />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('setLogin', true)
    } else {
      this.$store.commit('setLogin', false)
    }
  }
}
</script>

<style>
body, html {
    height: 180%;
    margin-bottom: 20px;
  }
  #app {
    height: 100%;
    background-color: #f9f6f7;
  }
</style>
