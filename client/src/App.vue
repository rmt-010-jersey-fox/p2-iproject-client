<template>
  <div id="app" class="flex flex-col h-screen">
    <HFooter></HFooter>
    <Navbar></Navbar>
    <div class="flex-grow py-4">
    <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HFooter from 'vue-hacktiv-footer'

export default {
  name: 'App',
  components: {
    Navbar, Footer, HFooter
  }
}
</script>

<style>

</style>
