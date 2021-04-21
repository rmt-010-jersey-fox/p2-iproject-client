<template>
  <div>
    <Navbar/>

    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from 'vue-hacktiv-footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.footer {
  background-color: white;
}
</style>
