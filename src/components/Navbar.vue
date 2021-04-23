<template>
  <nav
    id="navbar"
    class="navbar sticky-top navbar-expand-lg navbar-light bg-light"
  >
    <router-link id="nav-home" class="navbar-brand" to="/"
      > 8Hag</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link id="nav-add" class="nav-link" to="/memes/add" v-if="login"
            > Add Meme</router-link
          >
        </li>
      </ul>
      <router-link
        class="btn btn-outline-primary my-2 my-sm-0 mr-1"
        to="/profile"
        v-if="login"
      > Profile
      </router-link>
      <router-link
        class="btn btn-outline-primary my-2 my-sm-0 mr-1"
        to="/login"
        v-if="!login"
      > Login
      </router-link>
      <button
        id="btn-logout"
        class="btn btn-outline-danger my-2 my-sm-0 mr-1"
        @click.prevent="logout"
        v-else
      > Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      login: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.login = false
      this.$router.push("/");
    },
    checkLogin () {
        if (localStorage.getItem('access_token')) {
            this.login = true
        } else {
            this.login = false
        }
    }
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style>
</style>