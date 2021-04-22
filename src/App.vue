<template>
  <div id="app">
    <Navbar/>
    <!-- <Banner/>
    <Tagline/> -->
    <!-- <Login/> -->
    <div>
      <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. -->
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Tagline from './components/Tagline'
import Login from './views/Login'


export default {
  components : {
    Navbar,
    Login,
    Footer,
    Banner,
    Tagline
  }
}
</script>


<style>
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

.col-xl-3
    {
        max-width: 25%; 

        flex: 0 0 25%;
    }


</style>
