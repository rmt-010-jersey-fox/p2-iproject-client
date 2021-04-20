<template>
  <nav
    id="navbar"
    class="navbar navbar-expand-lg navbar-light bg-light" style="background-image: linear-gradient(gray,white)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#" v-on:click.prevent="changePage('/')">
        <img
          src="http://www.t-bar.gr/showroom/wp-content/uploads/2014/04/000743-716x716.png"
          alt=""
          width="45"
          height="45"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" style="font-family: Montserrat">
          <a class="nav-link" href="#" v-on:click.prevent="changePage('/Login') "
             v-if="getAccessToken === false">Login</a
          >
          <a class="nav-link" href="#" v-on:click.prevent="changePage('/register')"
             v-if="getAccessToken === false">Register</a
          >
          <a class="nav-link" href="#" v-on:click.prevent="changePage('/')"
            >Home</a
          >
          <a
            class="nav-link"
            href="#"
            v-on:click.prevent="changePage('/bookmarks')"
             v-if="getAccessToken === true">Bookmarks</a
          >
          <a
            v-on:click.prevent="changePage('/search')"
            class="nav-link"
            aria-current="page"
            href="#"
            >search</a
          >
            <a class="nav-link" @click.prevent="userLogout" href="#" v-if="getAccessToken === true">logout</a>
        </div>
        <div class="navbar-nav">
          <div>
           
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["page"],
  methods: {
    changePage(route) {
      this.$router.push(route);
    },
    userLogout() {
      this.$store.dispatch("userLogout");
    },
  },
  computed: {
    getAccessToken() {
      return this.$store.state.isLogin
    },
  },

};
</script>

<style>
</style>
