<template>
  <section>
    <div class="container my-6 pt-6">
      <div class="box" style="background-color: #fcc7ce">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child">
              <figure class="image is-128x128">
                <img
                  v-if="getProfile.gender === 'Wanita'"
                  class="is-rounded"
                  src="@/assets/female.jpeg"
                />
                <img
                  v-if="getProfile.gender === 'Pria'"
                  class="is-rounded"
                  src="@/assets/male.jpeg"
                />
              </figure>
              <p class="title">
                {{ getProfile.first_name }} {{ getProfile.last_name }}
              </p>
              <p class="headers">{{ getProfile.address }}</p>
              <p class="headers">{{ getProfile.email }}</p>
            </article>
          </div>
          <PatientAction />
        </div>
      </div>
    </div>
    <router-view />
  </section>
</template>

<script>
  import PatientAction from "./components/PatientAction";
  export default {
    name: "Patient",
    components: {
      PatientAction,
    },
    computed: {
      getProfile() {
        return this.$store.state.getProfile;
      },
    },
    created() {
      this.$store.dispatch("getProfile");
    },
  };
</script>

<style></style>
