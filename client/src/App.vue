<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <HFooter class="footer" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import HFooter from 'vue-hacktiv-footer'

export default {
  components: {
    Navbar,
    HFooter
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

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #BB2D3B;
  color: white;
  text-align: center;
}
</style>
