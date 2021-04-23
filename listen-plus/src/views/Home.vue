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
      <!-- Content -->
      <div class="container" id="table-data" style="overflow-y: auto;">
        <CardSongList v-for="song in songs"
        :key="song.id"
        :song="song"
        :playlists="playlists"
        />
      </div>
    </section>
    <div class="fixed-bottom"><HFooter></HFooter></div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardSongList from '@/components/CardSongList'
import Navbar from '@/components/Navbar'
import HFooter from 'vue-hacktiv-footer'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    CardSongList,
    Navbar,
    HFooter
  },
  computed: mapState(['songs', 'playlists']),
  methods: mapActions(['fetchSongs', 'fetchPlaylists']),
  created () {
    this.fetchSongs()
    this.fetchPlaylists()
  }
}
</script>
