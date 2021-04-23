<template>
  <!-- Hadist Hasil Search -->
<div class="container mb-5">
  <div class="row border-radius shadow" style="background-color: #3e9ca5">
      <div class="text-center mt-4">
        <h1 style="font-weight: bold; color: white" >Hadist</h1>
        <hr class="garis">
      </div>
    <DataHadist
    v-for="(hadist, index) in hadists"
    :key="index"
    :hadist="hadist"
    ></DataHadist>
  </div>
</div>
</template>
<script>
import DataHadist from '../components/DataHadist'

export default {
  name: 'Hadist',
  components: {
    DataHadist
  },
  computed: {
    hadists () {
      return this.$store.state.hadists
    }
  }
}
</script>

<style>

</style>
