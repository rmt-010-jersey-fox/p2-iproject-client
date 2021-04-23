<template>
  <div class="card">
    <!-- songs detail -->
    <div class="row song-container">
      <div class="col-4" >
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
          <button class="btn" @click="fetchLyrics" style="background-color: #EDDDC6;">Lyrics</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['song'],
  methods: {
    fetchLyrics () {
      this.$store.dispatch('fetchLyrics', {
        keywords: this.song.track_title
      })
    }
  }
}
</script>
