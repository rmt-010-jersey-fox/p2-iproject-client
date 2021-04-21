<template>
  <div id="app">
    <router-view />
    <HFooter></HFooter>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
* {
  font-family: "Roboto Condensed", sans-serif;
}
.orn {
  background-color: #ff8800 !important;
}
</style>
