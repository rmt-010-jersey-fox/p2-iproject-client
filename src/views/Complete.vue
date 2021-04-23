<template>
  <div>
    <Navbar />
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
                <complete-list
                  v-for="(anime, idx) in animes"
                  :key="anime.id"
                  :anime="anime"
                  :idx="idx"/>
              </tbody>
            </table>
          </div>
          <div v-else>
            <h1>No Completed Anime</h1>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CompleteList from '../components/completeList.vue'

export default {
  name: 'Complete',
  data () {
    return {
      fields: ['Id', 'Anima Name', 'Watched Episodes', 'Total Episodes', 'Status']
    }
  },
  components: { Navbar, CompleteList },
  props: ['anime', 'idx'],
  methods: {
    fetchAnimes () {
      this.$store.dispatch('fetchComplete')
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
