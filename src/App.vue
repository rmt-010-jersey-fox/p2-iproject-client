<template>
  <div id="app">
    <div class="theme-layout">
      <Navbar/>
      <AddEvent/>
      <AddThread/>
      <EditThread/>
      <Thread/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AddEvent from './components/AddEvent'
import AddThread from './components/AddThread'
import Thread from './views/Thread'
import EditThread from './components/EditThread'
export default {
  name: 'App',
  components: { Navbar , AddEvent, AddThread, Thread, EditThread },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('changeIsLogin', true)
    } else {
      this.$store.dispatch('changeIsLogin', false)
    }
  }
}
</script>

<style>
.row.merged20 {
    margin-right: -10px;
    margin-left: -10px;
}
</style>
