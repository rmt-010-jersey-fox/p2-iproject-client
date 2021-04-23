<template>
  <div>
    <Navbar />
    <div class="row mb-3 mt-3">
        <div class="col">
          <b-button variant="primary" @click="handleAddAnime"
            >Add new Anime</b-button
          >
        </div>
    </div>
 <router-view />

      <div class="row">
        <div class="col table-animes text-center">
          <div v-if="animes.length > 0">
            <table class="table">
              <thead>
                <tr>
                  <th v-for="(field, idx) in fields" :key="idx" scope="col">{{ field }}</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <anime-list
                  v-for="(anime, idx) in animes"
                  :key="anime.id"
                  :anime="anime"
                  :idx="idx"/>
              </tbody>
            </table>
          </div>
          <div v-else>
            <h1>No Anime. Please Add New Anime You Want To Watch</h1>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AnimeList from '../components/AnimeList.vue'

export default {
  name: 'Home',
  data () {
    return {
      fields: ['Id', 'Image', 'Anime Name', 'Watched Episodes', 'Total Episodes', 'Status', 'Action']
    }
  },
  components: { Navbar, AnimeList },
  props: [],
  methods: {
    handleAddAnime () {
      this.$router.push('/addAnime')
    },
    fetchAnimes () {
      this.$store.dispatch('fetchAnimes')
    }
  },
  created () {
    this.fetchAnimes()
  },
  computed: {
    animes () {
      return this.$store.state.animes
    }
  },
  watch: {

  }
}
</script>

<style>
</style>
