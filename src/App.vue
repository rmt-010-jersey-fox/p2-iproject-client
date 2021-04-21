<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('getMatches')
  }
}
</script>

<style>

</style>
