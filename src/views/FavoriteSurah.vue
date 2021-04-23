<template>
  <!-- Daftar List Al-Quran Favorite -->
<div class="container mb-5">
  <div class="row border-radius shadow" style="background-color: #EBF9F8">
      <div class="text-center mt-4">
        <h1 style="font-weight: bold; color: #3e9ca5" >My Favorites Surah</h1>
        <hr class="garis-gelap">
      </div>
      <div class="text-center mb-2">
        <button class="btn btn-danger" @click.prevent='toHomePage'>Home</button>
      </div>
    <!-- Card Favorite Surah -->
    <div class="row text-center">
      <CardFavSurah
      v-for="favoriteSurah in favoriteSurahs"
      :key="favoriteSurah.id"
      :favoriteSurah="favoriteSurah"
      ></CardFavSurah>
    </div>
  </div>
</div>
</template>

<script>
import CardFavSurah from '../components/CardFavSurah'


export default {
  name: 'FavoriteSurah',
  components: {
    CardFavSurah
  },
  computed: {
    favoriteSurahs () {
      return this.$store.state.favoriteSurahs
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
