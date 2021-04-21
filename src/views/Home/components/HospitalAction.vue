<template>
  <div class="tile is-parent is-9">
    <div class="tile is-child" v-if="!checkLogin">
      <router-link to="/login">
        <div class="container">
          <div class="level">
            <div class="level-item has-text-centered">
              <span class="icon">
                <i class="fas fa-user-shield fa-2x"></i>
              </span>
            </div>
          </div>
          <div class="level">
            <div class="level-item has-text-centered">
              <p>
                <strong>Pendaftaran Pasien</strong>
                <br /><br />Masuk Untuk Berobat
              </p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="tile is-child" v-if="checkLogin">
      <router-link to="/patient/regist">
        <div class="container">
          <div class="level">
            <div class="level-item has-text-centered">
              <span class="icon">
                <i class="fas fa-2x fa-stethoscope"></i>
              </span>
            </div>
          </div>
          <div class="level">
            <div class="level-item has-text-centered">
              <p>
                <strong>Pendaftaran Pasien</strong>
                <br /><br />Cepat, tepat, bersahabat
              </p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="tile is-child" v-if="checkLogin">
      <router-link to="/patient/history">
        <div class="container">
          <div class="level">
            <div class="level-item has-text-centered">
              <span class="icon">
                <i class="fas fa-notes-medical fa-2x"></i>
              </span>
            </div>
          </div>
          <div class="level">
            <div class="level-item has-text-centered">
              <p>
                <strong>Rekam Medis</strong> <br /><br />Catatan rekam medis
                anda
              </p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HospitalAction",
    computed: {
      checkLogin() {
        return this.$store.state.checkLogin;
      },
    },
    created() {
      this.$store.dispatch("checkLogin");
    },
  };
</script>

<style></style>
