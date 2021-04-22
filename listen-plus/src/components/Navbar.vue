<template>
  <!-- Nav Bar -->
  <section>
    <div id="nav" class="d-flex justify-content-center">
      <div class="col-1">
        <router-link to="/">
          <button class="clickable-btn circle-icon"><i class="fas fa-home"></i></button>
        </router-link>
      </div>
      <div class="col-1">
        <router-link to="/playlist">
          <button class="clickable-btn circle-icon"><i class="fas fa-heart"></i></button>
        </router-link>
      </div>
      <div class="col-1">
        <router-link to="/songs">
          <button class="clickable-btn circle-icon"><i class="fas fa-music"></i></button>
        </router-link>
      </div>
      <div class="col-1">
        <router-link to="/register">
          <button class="clickable-btn circle-icon"><i class="fas fa-user-tie"></i></button>
        </router-link>
      </div>
      <div class="col-1">
        <router-link to="/login">
          <button class="clickable-btn circle-icon"><i class="fas fa-sign-in-alt"></i></button>
        </router-link>
      </div>
      <div class="col-1">
          <button class="clickable-btn circle-icon" @click.prevent="logOut()"><i class="fas fa-sign-out-alt"></i></button>
      </div>
    </div>
  <!-- Website Name -->
    <h2>Listen+</h2>
  </section>
</template>

<script>
import router from '../router'

export default {
  name: 'Navbar',
  methods: {
    logOut () {
      localStorage.clear()
      router.push('/')
    },
    redirHome () {
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 30px;
}

.circle-icon {
    background: #f9f9f7;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-color: #f9f9f7;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    padding: 0px;
}

.clickable-btn {
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #EDDDC6;
}
</style>
