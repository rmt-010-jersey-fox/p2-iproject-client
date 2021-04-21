<template>
  <!-- List Surah Al-Quran -->
<div class="container mb-5">
  <div class="row border-radius shadow" style="background-color: #3e9ca5">
      <div class="text-center mt-4">
        <h1 style="font-weight: bold; color: white" >Detail Surah</h1>
        <hr class="garis">
      </div>
    <!-- Card Surah -->
    <div class="col">
      <div class="text-center mb-2">
        <button class="btn btn-danger" @click.prevent='toHomePage'>Back</button>
      </div>
      <!-- Tabel Ayat -->
      <table class="table table-light table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Ayat</th>
            <th scope="col">Arab</th>
            <th scope="col">Sounds</th>
          </tr>
        </thead>
        <tbody>
          <DataSurah
          v-for="(ayatSurah, index) in ayatSurahs"
          :key="index"
          :ayatSurah="ayatSurah"
          ></DataSurah>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import DataSurah from '../components/DataSurah'

export default {
  name: 'OneSurah',
  components: {
    DataSurah
  },
  computed: {
    ayatSurahs () {
      return this.$store.state.ayatSurahs
    }
  },
  methods: {
    toHomePage () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style>

</style>
