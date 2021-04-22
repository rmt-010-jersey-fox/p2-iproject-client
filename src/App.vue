<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import HFooter from 'vue-hacktiv-footer'
export default {
  components: {
    Navbar, HFooter
  },
  created () {
    this.$store.dispatch('getMatches')
    this.$store.dispatch('getHighlights')
    this.$store.dispatch('getSquad')
    this.$store.dispatch('getPlayersByPosition', 'Goalkeeper')
    this.$store.dispatch('getPlayersByPosition', 'Defender')
    this.$store.dispatch('getPlayersByPosition', 'Midfielder')
    this.$store.dispatch('getPlayersByPosition', 'Attacker')
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('confirmLogin', true)
    } else {
      this.$store.dispatch('confirmLogin', false)
    }
  }
}
</script>

<style>

</style>
