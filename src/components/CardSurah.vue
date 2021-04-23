<template>
<div class="col-3 mb-3 border-radius">
  <div class="card border-radius shadow" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title" style="font-weight: bold;">{{surahQuran.SurahId}}. {{surahQuran.surahName}} ({{surahQuran.surahArti}})</h5>
      <p class="card-text">{{surahQuran.surahJenis}}</p>
      <p class="card-text">Jumah : {{surahQuran.surahAyat}} Ayat</p>
      <div>
        <a @click.prevent="readSurah" class="btn btn-warning btn-sm"><i class="bi bi-book-half"></i> Read</a>
        <a @click.prevent="favoriteSurah" class="btn btn-primary btn-sm"><i class="bi bi-bookmark-heart"></i> Favorite</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardSurah',
  props: ['surahQuran'],
  methods: {
    readSurah () {
      const payload = {
        surah: this.surahQuran.SurahId,
        ayat: ''
      }

      this.$store.dispatch('getSurah', payload)
    },

    favoriteSurah () {
      const payload = {
        SurahId: this.surahQuran.SurahId,
        surahName: this.surahQuran.surahName,
        surahArti: this.surahQuran.surahArti,
        surahJenis: this.surahQuran.surahJenis,
        surahAyat: this.surahQuran.surahAyat
      }

      this.$store.dispatch('addFavoriteSurah', payload)
    }
  }
}
</script>

<style>

</style>
