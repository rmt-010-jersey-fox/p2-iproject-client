<template>
  <div id="app">
    <div id="nav">
      <Navbar> </Navbar>
    </div>

    <Sidebar v-if="isLogin"> </Sidebar>
    <router-view />
    <HFooter> </HFooter>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import HFooter from "vue-hacktiv-footer";
import Sidebar from "@/components/Sidebar";
export default {
  components: { Navbar, HFooter, Sidebar },
  methods: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  created() {
    if (localStorage.access_token) {
      const payload = {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        access_token: localStorage.getItem("access_token"),
      };
      this.$store.commit("SET_LOGIN", payload);
    }
  },
};
</script>
<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
