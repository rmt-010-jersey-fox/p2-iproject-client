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
        @click.prevent="$router.push('/dashboard')"
        >Dashboard</v-toolbar-title
      >
      <v-toolbar-title
        class="white--text font-weight-black ml-6"
        style="cursor: pointer"
        @click.prevent="$router.push('/chat')"
        >Chat Room</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn
        outlined
        rounded
        depressed
        large
        @click.prevent="$router.push('/register')"
        color="warning"
      >
        <v-icon left>mdi-account-plus</v-icon>
        <strong>Daftar</strong>
      </v-btn>
      <v-btn
        rounded
        depressed
        large
        @click.prevent="$router.push('/login')"
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
        @click.prevent="$router.push('/explore')"
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
      >
        <v-icon left>mdi-exit-to-app</v-icon>
        <strong>Keluar</strong>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "Toolbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style></style>
