<template>
    <div id="app">
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-12 fixed-top">
        <div class="container">
            <a class="navbar-brand" >
              <img src="https://images.unsplash.com/photo-1534226501678-2988ac084d54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGljb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="" width="70" height="45">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class=navbar-nav>
                    <li class="nav-item" v-if="isLogin && $route.name!='Home'">
                        <router-link class="nav-link btn-success text-white fs-5 me-3" to="/" > Home</router-link>
                    </li>
                    <li class="nav-item" v-if="isLogin && $route.name!='Wishlists' && $route.name!='Error404'">
                        <router-link class="nav-link btn-success text-white fs-5 me-3" to="/wishlists" > My Wish List</router-link>
                    </li >
                      <b-dropdown id="dropdown-left" text="Category" variant="primary" size="lg" v-if="isLogin && $route.name!='Home' && $route.name!='Error404'">
                        <b-dropdown-item @click="navbarCategory('manga')">Manga</b-dropdown-item>
                        <b-dropdown-item @click="navbarCategory('animals')">Animals</b-dropdown-item>
                        <b-dropdown-item @click="navbarCategory('education')">Education</b-dropdown-item>
                        <b-dropdown-item @click="navbarCategory('humor')">Humor</b-dropdown-item>
                        <b-dropdown-item @click="navbarCategory('family')">Family</b-dropdown-item>
                        <b-dropdown-item @click="navbarCategory('travel')">Travel</b-dropdown-item>
                        <b-dropdown-item @click="navbarCategory('health')">Health</b-dropdown-item>
                        <b-dropdown-item @click="navbarCategory('games-and-activities')">Games and Activities</b-dropdown-item>
                      </b-dropdown>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <p class="nav-link text-white fs-5 me-4" v-if="isLogin">Hello {{username}}</p>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn-info text-dark fs-5" to="/login" v-if="!isLogin && $route.name!='Login'">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn-info text-dark fs-5" to="/register" v-if="!isLogin && $route.name!='Register'">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="btn nav-link bg-danger text-white fs-5" @click.prevent="logout" v-if="isLogin">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- AKHIR NAVBAR -->
  <router-view/>
      <HFooter
      :class="[activeClass]"
      />
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv-footer'
export default {
  components: { HFooter },
  computed: {
    username() {
      return this.$store.state.username
    },
    isLogin() {
      return this.$store.state.isLogin
    },
    activeClass() {
      if (this.$route.name != "Books" && this.$route.name != "BookDetail") {
        return 'stickBawah'
      }
      else {
        return ''
      }
    },
  },
  methods: {
    logout() {
      this.$store.commit('setLogout')
      localStorage.removeItem('token')
      this.$router.push({ name: 'Login' })
    },
    navbarCategory(category) {
      this.$router.push(`/books/${category}`).catch(()=>{});
      this.$store.dispatch('fetchBooks', category)
    }
  },
}
</script>

<style>
.stickBawah {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: white;
   text-align: center;
}
</style>
