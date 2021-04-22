<template>
  <div class="container">
    <h1 style="margin-bottom: 2cm">Movie News</h1>
    <div class="row">
      <Information
      v-for="information in informations"
      :key="information.id"
      :information="information"
      ></Information>
    </div>
  </div>
</template>

<script>
import Information from "../components/Information";
export default {
  components: {
    Information
  },
  computed: {
      informations() {
          return this.$store.getters.getInformation
      }
  },
  created() {
      this.$store.dispatch('getInformation')
  }
};
</script>

<style>
</style>