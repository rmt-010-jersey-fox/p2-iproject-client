<template>
  <div id="app">
    <router-view/>
  <div id="footer">
  <HFooter></HFooter>
  </div>
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
#app {
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 10px;
  min-height: 100vh;
  font-family: lucida -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

#footer {
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 2.5rem;
}
</style>
