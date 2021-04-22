<template>
  <nav>
    <v-toolbar flat color="primary">
      <img
        width="120"
        src="@/assets/maipren-logo.png"
        class="ml-6"
        @click.prevent="$router.push('/')"
        style="cursor: pointer"
        alt=""
      />
      <v-toolbar-title
        class="white--text font-weight-black ml-6"
        style="cursor: pointer"
        @click.prevent="$router.push('/dashboard').catch(() => {})"
        v-if="$store.state.isLogin"
        >Dashboard</v-toolbar-title
      >
      <v-toolbar-title
        class="white--text font-weight-black ml-6"
        style="cursor: pointer"
        @click.prevent="$router.push('/chat')"
        v-if="$store.state.isLogin"
        >Chat Box</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn
        rounded
        depressed
        large
        @click.prevent="$router.push('/login').catch(() => {})"
        v-if="!$store.state.isLogin"
        color="white"
        class="mx-4"
      >
        <v-icon left>mdi-login</v-icon>
        <strong>Masuk</strong>
      </v-btn>
      <v-btn
        rounded
        depressed
        large
        @click.prevent="$router.push('/explore').catch(() => {})"
        color="warning"
      >
        <v-icon left class="black--text">mdi-earth</v-icon>
        <strong class="black--text">Explore</strong>
      </v-btn>
      <v-btn
        rounded
        depressed
        outlined
        large
        class="mx-4"
        color="white"
        @click.prevent="logout"
        v-if="$store.state.isLogin"
      >
        <v-icon left>mdi-exit-to-app</v-icon>
        <strong>Keluar</strong>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Toolbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("CHECK_IS_LOGIN");
      this.$router.push("/").catch(() => {});
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("User signed out.");
      });
      Swal.fire({
        title: `Bye ~`,
        timer: 3000,
        icon: "success",
        showConfirmButton: false,
        toast: true,
        position: "bottom-end",
      });
    },
  },
};
</script>

<style></style>
