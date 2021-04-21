<template>
  <div id="app">
    <Navbar />
    <CategoryBar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import CategoryBar from './components/CategoryBar'

export default {
  components: {
    Navbar,
    CategoryBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
