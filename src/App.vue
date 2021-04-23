<template>
  <div id="app">
<HFooter></HFooter>
    <router-view/>

  </div>
</template>

<script>
import HFooter from 'vue-hacktiv-footer'

export default {
  data () {
    return {}
  },
  components: { HFooter },
  methods: {},
  created () {}
}
</script>

<style>
.Hfooter {
  position: fixed;
  bottom: 0;
}

body {
  padding: 0;
  margin: 0;
  background: url(https://i.pinimg.com/originals/66/27/fe/6627fe46c0180aa255e3098f8a4d3603.jpg)
    no-repeat;
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
