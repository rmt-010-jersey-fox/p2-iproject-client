<template>
  <div>
    <Navbar/>
    <div class="container-fluid my-1">
      <div class="row">
        <SongCard
          v-for="song in songs"
          :key="song.id"
          :song="song"
        ></SongCard>
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from 'vue-hacktiv-footer'
import SongCard from '../components/SongCard'

export default {
  name: 'Songs',
  components: {
    Navbar,
    Footer,
    SongCard
  },
  computed: {
    songs () {
      return this.$store.state.songs
    }
  },
  created () {
    this.$store.dispatch('getSongs')
    this.$store.commit('clearSongPage')
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
