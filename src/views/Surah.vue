<template>
    <!-- Daftar List Al-Quran -->
  <div class="container mb-5">
    <div class="row border-radius shadow" style="background-color: #EBF9F8">
        <div class="text-center mt-4">
          <h1 style="font-weight: bold; color: #3e9ca5" >All Surah</h1>
          <hr class="garis-gelap">
        </div>
      <div class="text-center mb-2">
        <button class="btn btn-danger" @click.prevent='toHomePage'>Home</button>
      </div>
      <!-- Card Surah -->
      <div class="row text-center">
        <CardSurah
        v-for="surahQuran in surahQurans"
        :key="surahQuran.SurahId"
        :surahQuran="surahQuran"
        ></CardSurah>
      </div>
    </div>
  </div>
</template>

<script>
import CardSurah from '../components/CardSurah'

export default {
  name: 'Surah',
  components: {
    CardSurah
  },
  computed: {
    surahQurans () {
      return this.$store.state.surahQurans
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
