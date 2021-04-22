<template>
  <div id="app">
    <router-view/>
    <HFooter id="footer"/>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv-footer'
export default {
  components: {
    HFooter
  }
}
</script>

<style>
html,
#app {
    min-height: 100vh;
    background-color: #74EBD5;
    background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
}
body {
    color: #fff;
    overflow-x: hidden;
    height: 100%;
    background-color: #CFD8DC;
    background-repeat: no-repeat
}

/* #footer {
    clear: both;
    position: relative;
} */

</style>
