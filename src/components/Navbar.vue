<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-icon icon="view-dashboard" size="is-large" type="is-dark">
          Newsfeed</b-icon
        >
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

      <b-navbar-item v-if="isLogin" tag="router-link" :to="{ path: '/' }">
        <b-button @click.prevent="signOut" type="is-dark">Sign Out</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>
