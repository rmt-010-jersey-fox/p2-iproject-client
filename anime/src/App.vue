<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
  #app{
    background: #65d6ce;
    min-height: 100vh;
  }

</style>
