<template>
  <div class="home">
    <Navbar />
    <!-- Page Contents -->
    <section>
      <div class="container">
        <div class="row page-title border-bottom">
          <h4>My Playlist</h4>
        </div>
      </div>
      <div id="nav">
      <router-link to="/add">Add Playlist</router-link>
      </div>
      <!-- Content -->
      <div class="container" id="table-data" style="overflow-y: auto;">
        <PlaylistCard v-for="playlist in playlists"
        :key="playlist.id"
        :playlist="playlist"
        />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import PlaylistCard from '@/components/PlaylistCard'
import Navbar from '@/components/Navbar'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Playlist',
  components: {
    PlaylistCard,
    Navbar
  },
  computed: mapState(['playlists']),
  methods: mapActions(['fetchPlaylists']),
  created () {
    this.fetchPlaylists()
  }
}
</script>

<style>
#nav a {
  font-weight: bold;
  color: #000000;
}
</style>
