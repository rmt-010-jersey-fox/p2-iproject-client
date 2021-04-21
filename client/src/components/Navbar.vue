<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div id="navbar" class="container-fluid">
      <a class="navbar-brand" >Bank Sampah</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="btn nav-link" @click.prevent="switchPage('Dashboard')" :class="{ 'active' : page === 'Dashboard' }">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/saldo" class="btn nav-link" @click.prevent="switchPage('Saldo')" :class="{ 'active' : page === 'Saldo' }">Saldo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/currency" class="btn nav-link" @click.prevent="switchPage('Currency')" :class="{ 'active' : page === 'Currency' }">Currency</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="btn nav-link" @click.prevent="switchPage('About')" :class="{ 'active' : page === 'About' }">About</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <button @click.prevent="logout" class="trans" type="submit"><GoogleLogin class="btn btn-outline-danger" :params="params" :logoutButton=true>Logout</GoogleLogin></button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
  name: 'Navbar',
  data () {
    return {
      page: '',
      params: {
        client_id: '1063244199097-ngvat44cl0qedpdsjiuj389oil6d69rq.apps.googleusercontent.com'
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    switchPage (param) {
      this.page = param
    },

    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trans {
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
}
</style>
