<template>
  <div class="card">
    <!-- songs detail -->
    <div class="row song-container">
      <div class="col-4">
        <p>{{ song.track_title }}</p>
      </div>
      <div class="col-3">
        <p>{{ song.artist }}</p>
      </div>
      <div class="col-3">
        <p>{{ song.album_title }}</p>
      </div>
      <div class="col-2 p-3">
        <div class="song-action d-grid gap-5">
          <div class="dropdown">
            <select v-model="playlistName" name="select-playlists">
              <option v-for="playlist in playlists"
              :key="playlist.name"
              :value="playlist.name"
              >
              {{ playlist.name }}
              </option>
            </select>
          </div>
          <button class="btn" @click="addSongToPlaylist" style="background-color: #EDDDC6;">Add To Playlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSongList',
  props: ['song', 'playlists'],
  data () {
    return {
      playlistName: 'choose playlist'
    }
  },
  methods: {
    addSongToPlaylist () {
      this.$store.dispatch('addSongToPlaylist', {
        name: this.playlistName,
        id: this.song.id
      })
    }
  }
}
</script>
