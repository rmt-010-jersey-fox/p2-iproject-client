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
              @click="onCategory('general')"
              icon="newspaper"
              label="General"
            ></b-menu-item>
            <b-menu-item
              @click="onCategory('sports')"
              icon="basketball"
              label="Sports"
            ></b-menu-item>
            <b-menu-item
              @click="onCategory('bussines')"
              icon="office-building"
              label="Bussiness"
            ></b-menu-item>
            <b-menu-item
              class="is-light"
              @click="onCategory('entertainment')"
              icon="microphone-variant"
              label="Entertaiment"
            ></b-menu-item>
            <b-menu-item
              @click="onCategory('health')"
              icon="hospital-box"
              label="Health"
            ></b-menu-item>
            <b-menu-item
              @click="onCategory('science')"
              icon="eyedropper"
              label="Science"
            ></b-menu-item>
            <b-menu-item
              @click="onCategory('technology')"
              icon="chemical-weapon"
              label="Technology"
            ></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
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
    onCategory(category) {
      let payload = {
        category: category,
        language: "id",
      };
      this.$store.dispatch("getHeadlines", payload);
      payload = {
        q: category,
        language: "id",
      };
      this.$store.dispatch("getPopulars", payload);
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
