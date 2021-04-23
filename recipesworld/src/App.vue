<template>
  <div id="app">
    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'App',
  components: {
    HFooter
  }
}
</script>

<style>

</style>
