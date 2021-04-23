<template>
  <section>
    <b-sidebar type="is-light" :fullheight="fullheight" v-model="open">
      <div class="p-1">
        <img
          @click="sidebarOpen"
          class="is-clickable"
          src="../assets/logo.png"
        />
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item label="My Account">
              <b-menu-item icon="account" :label="username"></b-menu-item>
              <b-menu-item icon="email" :label="email"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list label="category">
            <b-menu-item
              @click="forwardAll"
              icon="newspaper"
              label="General"
            ></b-menu-item>
            <b-menu-item
              @click="category('sports')"
              icon="volleyball"
              label="Sports"
            ></b-menu-item>
            <b-menu-item
              @click="category('business')"
              icon="cash"
              label="Business"
            ></b-menu-item>
            <b-menu-item
              @click="category('entertainment')"
              icon="microphone"
              label="Entertaiment"
            ></b-menu-item>
            <b-menu-item
              @click="category('science and technology')"
              icon="chemical-weapon"
              label="Science & Tech"
            ></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item
              @click="forwardReadlists"
              icon="book"
              label="Readlists"
            ></b-menu-item>
            <br />
            <b-button
              label="Sign Out"
              type="is-dark"
              to="/"
              v-if="isLogin"
              @click="signOut"
            >
            </b-button>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      fullheight: true,
    };
  },
  methods: {
    forwardAll() {
      this.$router.push({ path: "/" });
    },
    forwardReadlists() {
      this.$router.push({ path: "/readlists" });
    },
    sidebarOpen() {
      this.$store.commit("SIDEPANEL_CTRL");
    },

    signOut() {
      this.$store.dispatch("signOut");
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    username() {
      return this.$store.state.user;
    },
    email() {
      return this.$store.state.email;
    },
    open() {
      return this.$store.state.sidebarOpen;
    },
  },
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
