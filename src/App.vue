<template>
  <div id="app">
    <Navbar/>
    <router-view />
    <HFooter></HFooter>
  </div>
</template>
<script>
import Navbar from '../src/components/Navbar'
import HFooter from 'vue-hacktiv-footer'

export default {
  name: 'App',
  components: {
    Navbar,
    HFooter
  },
  created () {
    if (localStorage.token) {
      this.$store.commit('LOGIN', true)
      this.$store.commit('VERIFY_USER', localStorage.UserId)
    }
  }
}
</script>
<style>

* {
  font-family: 'Montserrat', sans-serif;
}
</style>
