<template>
  <section
    class="section is-medium"
    style="
      background-color: #89f1ff;
      margin: 0 -65px -80px -65px;
      padding-top: 50px;
    "
  >
    <div class="level-item has-text-centered">
      <div>
        <p class="title">Statistik Persebaran Virus Covid-19</p>
        <p class="heading is-size-5">
          Jaga jarak, gunakan masker, <br />
          dan selalu patuhi protokol kesehatan
        </p>
      </div>
    </div>
    <nav class="level pt-4">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-size-6">Positif</p>
          <p class="title">{{ getCovidData[0].positif }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-size-6">Dirawat</p>
          <p class="title">{{ getCovidData[0].dirawat }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-size-6">Sembuh</p>
          <p class="title">{{ getCovidData[0].sembuh }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-size-6">Meninggal</p>
          <p class="title">{{ getCovidData[0].meninggal }}</p>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
  export default {
    name: "Covid",
    computed: {
      getCovidData() {
        return this.$store.state.getCovidData;
      },
    },
    created() {
      this.$store.dispatch("getCovidData");
    },
  };
</script>

<style></style>
