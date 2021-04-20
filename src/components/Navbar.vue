<template>
<header>
  <div>
    <h1>Flashero</h1>
  </div>

  <nav>
    <ul>
      <router-link :to="{ name: 'Home'}"><li>About</li></router-link>
      <router-link v-if="loginStatus" :to="{ name: 'Home'}"><li>Home</li></router-link>
      <router-link v-if="loginStatus" :to="{ name: 'User', params: { id: loggedUser.id }}"><li>{{ loggedUser.username }}</li></router-link>
      <li @click="logout">Logout</li>
    </ul>
  </nav>
</header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',

  computed: {
    loginStatus () {
      return this.$store.state.isLoggedIn
    },

    loggedUser () {
      return this.$store.state.loggedUser
    }
  },

  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style scoped>
  li:hover {
    cursor: pointer;
  }

</style>
