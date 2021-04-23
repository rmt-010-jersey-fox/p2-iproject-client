<template>
  <div id="nav">
    <div>
      <b-button variant="link" v-b-toggle.sidebar-1>LaLaLand</b-button>
    </div>
    <div>
      <button class="btn btn-dark text-white mr-3" @click="handleLogout">Logout</button>
    </div>
    <sidebar />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
  name: 'Navbar',
  components: { Sidebar },
  methods: {
    handleLogout () {
      this.$store.dispatch('handleLogout', true)
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
#nav {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #dab71d;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-child {
  margin-right: 10px;
}
button {
  color: #2c3e50;
}
</style>
