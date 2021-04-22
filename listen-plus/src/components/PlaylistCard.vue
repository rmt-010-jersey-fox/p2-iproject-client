<template>
  <div class="card">
    <!-- playlist detail -->
    <div class="container">
      <div class="row text-left">
        <p>{{ playlist.name }}</p>
      </div>
      <div class="row playlist-container">
        <div class="col-3">
        <img :src="playlist.cover" class="img-thumbnail" alt="...">
        </div>
        <div class="col-8">
          <Card v-for="song in songs"
          :key="song.id"
          :song="song">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'PlaylistCard',
  components: {
    Card
  },
  props: ['songs']
}
</script>
