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
          <button class="btn" @click="addToPlaylist" style="background-color: #EDDDC6;">Add To Playlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardToAdd',
  props: ['song'],
  methods: {
    addToPlaylist (id) {
      this.$store.dispatch('addToPlaylist', { id })
    }
  }
}
</script>
