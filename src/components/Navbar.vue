<template>
  <b-navbar class="navbar is-fixed-top">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qjKai74V_KnI6dkHI6wAswAAAA%26pid%3DApi&f=1"
          alt="Logo"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item @click.prevent="changePage('/')"> Home </b-navbar-item>
      <b-navbar-dropdown label="Jadwal Dokter">
        <b-navbar-item
          @click.prevent="changePage(`/poli?poli=${poli.name}`)"
          v-for="poli in polis"
          :key="poli.id"
        >
          {{ poli.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link
            to="/register"
            class="button is-primary"
            v-if="
              !checkLogin &&
              (checkLocation === '/login' || checkLocation === '/')
            "
          >
            <strong>Daftar</strong>
          </router-link>
          <router-link
            to="/login"
            class="button is-info"
            v-if="
              !checkLogin &&
              (checkLocation === '/register' || checkLocation === '/')
            "
          >
            Masuk
          </router-link>
        </div>
      </b-navbar-item>
      <b-navbar-dropdown v-if="checkLogin" label="Akun" class="mr-4">
        <b-navbar-item @click.prevent="changePage('/patient')">
          Profil Pasien
        </b-navbar-item>
        <b-navbar-item @click.prevent="signOut()"> Keluar </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>
<script>
  export default {
    name: "Navbar",
    methods: {
      changePage(path) {
        this.$router.push(path).catch(() => {});
      },
      signOut() {
        localStorage.clear();
        this.$store.dispatch("checkLogin");
        this.$router.push("/").catch(() => {});
      },
    },
    computed: {
      polis() {
        return this.$store.state.getPoli;
      },
      checkLogin() {
        return this.$store.state.checkLogin;
      },
      checkLocation() {
        return this.$route.path;
      },
    },
    created() {
      this.$store.dispatch("getPoli");
      this.$store.dispatch("checkLogin");
    },
  };
</script>
