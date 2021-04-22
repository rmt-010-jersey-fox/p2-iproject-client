<template>
  <div>
    <Navbar/>
    <div class="container-fluid my-1" style="background-color: rgba(245, 245, 245, 0.4);">
      <img :src="playlistDetails.image_url" style="height: 12.5%; width: 12.5%" class="my-1"/>
      <h1 style="color: black">{{ playlist.title.toUpperCase() }}</h1>
      <div class="row">
        <table class="table my-1">
          <thead>
            <tr>
              <th scope="col" style="color: black;">#</th>
              <th scope="col" style="color: black;">Artists</th>
              <th scope="col" style="color: black;">Album</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="track in playlistDetails.tracks" :key="track.id">
              <th scope="row" style="color: black;">{{ track.id }}</th>
              <td style="color: black;">{{ track.artists }}</td>
              <td style="color: black;">{{ track.album }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <iframe :src="link"
        width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"
        class="my-1"
      ></iframe>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from 'vue-hacktiv-footer'

export default {
  name: 'Playlists',
  components: {
    Navbar,
    Footer
  },
  computed: {
    playlist () {
      return this.$store.state.playlist
    },
    playlistDetails () {
      return this.$store.state.playlistDetails
    },
    link () {
      return ('https://open.spotify.com/embed/playlist/' + this.playlist.source)
    }
  },
  created () {
    this.$store.dispatch('getPlaylist', this.$route.params.id)
  }
}
</script>

<style scoped>
.row {
  overflow-y: scroll;
  height: 48.5vh
}

.footer {
  background-color: white;
}
</style>
