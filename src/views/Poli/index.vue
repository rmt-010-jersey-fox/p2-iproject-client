<template>
  <div class="my-6 pt-6">
    <div class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">Personel Poli {{ this.$route.query.poli }}</p>
          <p class="heading is-size-5">Rumah Sakit H-8</p>
        </div>
      </div>
    </div>
    <div class="columns ml-1 mr-3" style="margin-bottom: 100px">
      <Card v-for="doctor in getDoctor" :key="doctor.id" :doctor="doctor" />
    </div>
  </div>
</template>

<script>
  import Card from "./components/Card.vue";
  export default {
    name: "Doctor",
    components: {
      Card,
    },
    computed: {
      getDoctor() {
        let arrDoctor = [];
        this.$store.state.getPoli.forEach((poli) => {
          if (poli.name === this.$route.query.poli) {
            arrDoctor = poli.Doctors;
          }
        });
        return arrDoctor;
      },
    },
    created() {
      this.$store.dispatch("getPoli");
      this.getDoctor;
    },
  };
</script>

<style></style>
