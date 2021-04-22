<template>
  <div class="home">
    <Navbar />
    <!-- Page Contents -->
    <section>
      <div class="container">
        <div class="row page-title border-bottom">
          <h4>Songs</h4>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="col-4 input-group rounded">
          <input v-model="keywords" type="text" class="form-control rounded" placeholder="Search" />
          <span class="input-group-text border-0" id="search-addon">
            <button class="clickable-btn" @click="searchSong"><i class="fas fa-search"></i></button>
          </span>
        </div>
      </div>
      <!-- Content -->
      <div class="container" id="table-data" style="overflow-y: auto;">
        <CardToAdd v-for="song in songSearchResults"
        :key="song.id"
        :song="song"
        />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CardToAdd from '@/components/CardToAdd'
import Navbar from '@/components/Navbar'
import { mapState } from 'vuex'

export default {
  name: 'Songs',
  components: {
    CardToAdd,
    Navbar
  },
  data () {
    return {
      keywords: ''
    }
  },
  methods: {
    searchSong () {
      this.$store.dispatch('searchSong', {
        keywords: this.keywords
      })
    }
  },
  created () {
    this.searchSong()
  },
  computed: mapState(['songSearchResults'])
}
</script>
