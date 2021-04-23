<template>
  <div class="card">
    <!-- playlist detail -->
    <div class="container">
      <div class="row">
        <div class="col-6 playlist-title text-left">
          <h4>{{ playlist.name }}</h4>
        </div>
        <div class="col-6 delete-icon text-right">
        <button class="clickable-btn" @click="deletePl"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      <div class="row playlist-container">
        <div class="col-3">
        <img :src="playlist.cover" class="img-thumbnail" alt="...">
        </div>
        <div class="col-8">
          <Card v-for="song in playlist.songs"
          :key="song.id"
          :song="song"
          />
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
  props: ['playlist', 'songs'],
  methods: {
    deletePl () {
      this.$store.dispatch('delete', { id: this.playlist.id })
    }
  }
}
</script>
