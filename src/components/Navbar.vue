<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item>
        <b-button @click="sidebarOpen" type="is-text">
          <b-icon icon="view-dashboard" size="is-large" type="is-dark">
            Newsfeed</b-icon
          >
        </b-button>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item
        v-if="!isLogin"
        tag="router-link"
        :to="{ path: '/signin' }"
      >
        <b-button type="is-dark">Sign In</b-button>
      </b-navbar-item>
      <b-navbar-item
        v-if="!isLogin"
        tag="router-link"
        :to="{ path: '/signup' }"
      >
        <b-button type="is-light">Sign Up</b-button>
      </b-navbar-item>
      <b-navbar-item> <Search> </Search> </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Search from "../components/Search";
export default {
  name: "Navbar",
  components: { Search },
  methods: {
    sidebarOpen() {
      this.$store.commit("SIDEPANEL_CTRL");
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>
