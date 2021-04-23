<template>
    <nav class="navbar navbar-light bg-warning">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">FindBuddy</span>
        <!-- <div class="row"> -->
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
              <router-link v-if="!isLogin" to="/login">Login  </router-link>
              <a href="#" @click.prevent="logout" v-if="isLogin">  Logout  </a>
              <router-link v-if="!isLogin" to="/register">  Register  |</router-link>
              <router-link v-if="isLogin" to="/homepage">  Home  </router-link>
              <router-link v-if="isLogin" to="/schedule">  My Schedule</router-link>
          </div>
          <div class="col-sm-4"></div>
        </div>
      <!-- </div> -->
    </nav>
</template>

<script>
export default {
    name : "Navbar",
    computed : {
      isLogin() {
        return this.$store.state.isLogin
      }
    },
    methods : {
      cekLogin() {
        this.$store.commit('login')
      },
      logout() {
        localStorage.clear()
        this.cekLogin();
        this.$router.push({name : "Login"})
      }
    },
    created(){
      this.cekLogin()
    }
}
</script>

<style>

</style>