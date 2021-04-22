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
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item">{{ playlists.name }}</a></li>
            </ul>
          </div>
          <button class="btn" @click="addSongToPlaylist" style="background-color: #EDDDC6;">Add To Playlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['song', 'playlists'],
  data () {
    return {
      name: ''
    }
  },
  methods: {
    addSongToPlaylist (id) {
      this.$store.dispatch('addSongToPlaylist', { id }, {
        name: this.name
      })
    }
  }
}
</script>
