<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="logos" width="60" src="https://s.kaskus.id/r540x540/images/2014/03/31/3042786_20140331103325.png" alt="">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button @click.prevent="Logout" v-if="isLogin" type="button" class="btn btn-dark btn-sm">
          Logout
        </button>
         <button @click.prevent="Register" v-if="!isLogin" type="button" class="btn btn-dark btn-sm">
          Register
        </button>
         <button @click.prevent="Login" v-if="!isLogin" type="button" class="btn btn-dark btn-sm">
          Login
        </button>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    Login () {
      this.$router.push('/login')
    },
    Register () {
      this.$router.push('/register')
    },
    Logout () {
      this.$store.dispatch('Logout')
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
