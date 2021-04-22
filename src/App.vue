<template>
  <v-app id="app">
    <Toolbar></Toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";
export default {
  name: "App",
  components: {
    Toolbar,
  },
  data: () => ({
    //
  }),
  created() {
    this.$store.commit("CHECK_IS_LOGIN");
  },
};
</script>

<style>
#app {
  font-family: "Quicksand", sans-serif !important;
  background-color: #7868e6 !important;
}
</style>
