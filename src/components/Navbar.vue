<template>
<div id="nav">
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">
      <img src="../assets/ongkir.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Cek Ongkir
</router-link>
    <router-link to="/history">My History</router-link>
    <a href="#" @click.prevent="logout">Logout</a>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
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
</style>
