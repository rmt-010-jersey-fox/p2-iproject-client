<template>
  <div id="app">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <!-- <img src="https://hubpng.com/download/BkJDaVka7F1J0J4bLCGWNwYvrLQcL0AugNoo16ojRfjQrk1eVGGIgfR5A86PinHAl1w0yHBBpcvBlcQBeWbpl1xjZMlg9ouMqWTsEGuvW0MLBuOns9OWwYkzqTfAXD9yHepG7zojd2UqsWN4gd9eISPrz92eOdScqpDoPOangSCXv1aUeGzI0gYkgcva1THByhS275w5/large" alt="virus" width="350px"> -->
    <div class="footer">
      <Footer></Footer>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

#app {
  background: white;
  min-height: 100vh;
  background-size: cover;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.navbar {
  position: relative;
  top: -2em;
  margin-bottom: -40px;
}
</style>
