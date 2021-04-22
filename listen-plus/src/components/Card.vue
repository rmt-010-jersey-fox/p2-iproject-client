<template>
  <div class="card">
    <!-- songs detail -->
    <div class="row song-container">
      <div class="col-6">
        <p>{{ song.track_title }}</p>
      </div>
      <div class="col-3">
        <p>{{ song.artist }}</p>
      </div>
      <div class="col-3">
        <p>{{ song.album_title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['song']
}
</script>
