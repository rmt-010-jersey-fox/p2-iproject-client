<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
    <div class="container">
      <router-link :to="{ name: 'Home' }">
      <a class="navbar-brand js-scroll-trigger" href="#page-top"><div class="masthead-subheading">BarberShops</div></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars ml-1"></i>
      </button>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <router-link :to="{ name: 'Appointment' }">
            <li class="nav-item"><a v-if="isLogin" class="nav-link js-scroll-trigger" href="#appointment">Appointment</a></li>
          </router-link>
          <router-link :to="{ name: 'Register' }">
            <li class="nav-item"><a v-if="!isLogin" class="nav-link js-scroll-trigger" href="#register">Register</a></li>
          </router-link>
          <router-link :to="{ name: 'Login' }">
            <li class="nav-item"><a v-if="!isLogin" class="nav-link js-scroll-trigger" href="#login">Login</a></li>
          </router-link>
          <li class="nav-item"><a v-if="isLogin" class="nav-link js-scroll-trigger" >{{ this.$store.state.username }}</a></li>
          <li class="nav-item"><a @click="logout()" v-if="isLogin" class="nav-link js-scroll-trigger" href="#logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
