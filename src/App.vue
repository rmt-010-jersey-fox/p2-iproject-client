<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <navbar></navbar>
    <HFooter></HFooter>
    <router-view/>
  </div>
</template>


<script>
import Navbar from "./components/navbar"
import HFooter from 'vue-hacktiv-footer'

export default {
  components: {
    Navbar,
     HFooter
  },
  created(){
    if(localStorage.access_token){
      this.$store.commit('setLogin', true)
    }else {
       this.$store.commit('setLogin', false)
    }
  }
}
</script>


<style>
html,body {
  background-image: url(https://www.customwallpaper.net.au/wp-content/uploads/2017/07/White-Herring-Bricks.jpg);
}
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
