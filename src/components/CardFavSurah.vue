<template>
    <div class="col-3 mb-3 border-radius">
    <div class="card border-radius shadow" style="width: 16rem;">
      <div class="card-body">
        <h5 class="card-title" style="font-weight: bold;">{{favoriteSurah.SurahId}}. {{favoriteSurah.surahName}} ({{favoriteSurah.surahArti}})</h5>
        <p class="card-text">{{favoriteSurah.surahJenis}}</p>
        <p class="card-text">Jumah : {{favoriteSurah.surahAyat}} Ayat</p>
        <div>
          <a @click.prevent="readSurah" class="btn btn-warning btn-sm"><i class="bi bi-book-half"></i> Read</a>
          <a @click.prevent="deleteFavoriteSurah" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i> Remove</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFavSurah',
  props: ['favoriteSurah'],
  methods: {
    readSurah () {
      const payload = {
        surah: this.favoriteSurah.SurahId,
        ayat: ""
      }
      this.$store.dispatch('getSurah', payload)
    },

    deleteFavoriteSurah () {
      const payload = {
        id: this.favoriteSurah.id
      }
      this.$store.dispatch('deleteFavoriteSurah', payload)
    }

  }
}
</script>

<style>

</style>
