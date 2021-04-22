<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <a class="navbar-brand" href="#">
      <img src="../assets/deliver.png" width="30" height="30" class="d-inline-block align-top" alt="">
      NutriSum
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#" @click.prevent="$router.push('/')">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="$router.push('/nutrient')" >Nutrient</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="$router.push('/recipes')">Recipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" v-if="!isLogged" @click.prevent="$router.push('/login')">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" v-if="!isLogged" @click.prevent="$router.push('/register')" >Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" v-if="isLogged" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      // ! clear local
      this.$store.dispatch('logout')
      // ! check and change isLogin true/false
      this.$store.dispatch('isLogin')
    }
  },
  created () {
    this.$store.dispatch('isLogin')
  },
  computed : {
    isLogged () {
      return this.$store.state.isLogged
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
</style>