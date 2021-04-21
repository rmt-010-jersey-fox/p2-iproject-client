<template>
  <div class="manga">
    <div class="container" style="min-height: 100vh">
      <div style="height: 4.5rem" />
      <h3
        class="title is-3 pt-5 pl-5 has-text-white"
        style="text-align: center"
      >
        Manga
      </h3>
      <div class="pl-5">
        <MangaCard v-for="manga in mangas" :key="manga.id" :manga="manga" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MangaCard from '../components/mangaCard.vue'

export default {
  name: 'Manga',
  created () {
    this.$store.dispatch('mangaAnime')
  },
  components: {
    MangaCard
  },
  computed: {
    ...mapState({
      mangas: 'mangas'
    })
  }
}
</script>

<style></style>
