<template>
  <div>
    <Navbar/>
    <div class="container-fluid my-1" style="background-color: rgba(245, 245, 245, 0.4);">
      <h1 style="color: black">{{ song.title.toUpperCase() }}</h1>
      <h3 style="color: black">{{ song.artist.toUpperCase() }}</h3>
      <h5 style="color: black">{{ song.release_year }}</h5>
      <div class="box">
        <h1 style="color: black;" class="my-1">[[LYRICS]]</h1><br>
        <div v-html="songLyrics" style="color: black;"></div>
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
  name: 'songs',
  components: {
    Navbar,
    Footer
  },
  computed: {
    song () {
      return this.$store.state.song
    },
    songLyrics () {
      return this.$store.state.songLyrics
    },
    link () {
      return ('https://open.spotify.com/embed/track/' + this.song.source)
    }
  },
  created () {
    this.$store.dispatch('getSong', this.$route.params.id)
  }
}
</script>

<style scoped>
.box {
  overflow-y: scroll;
  height: 65vh;
}

.footer {
  background-color: white;
}

p {
  text-align: center;
}
</style>
