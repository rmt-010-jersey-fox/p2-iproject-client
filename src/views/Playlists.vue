<template>
  <div>
    <Navbar/>
    <div class="container-fluid my-1">
      <div class="row">
        <PlaylistCard
          v-for="playlist in playlists"
          :key="playlist.id"
          :playlist="playlist"
        ></PlaylistCard>
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from 'vue-hacktiv-footer'
import PlaylistCard from '../components/PlaylistCard'

export default {
  name: 'Playlists',
  components: {
    Navbar,
    Footer,
    PlaylistCard
  },
  computed: {
    playlists () {
      return this.$store.state.playlists
    }
  },
  created () {
    this.$store.dispatch('getPlaylists')
    this.$store.commit('clearPlaylistPage')
  }
}
</script>

<style scoped>
.row {
  overflow-y: scroll;
  height: 88vh
}

.footer {
  background-color: white;
}
</style>
