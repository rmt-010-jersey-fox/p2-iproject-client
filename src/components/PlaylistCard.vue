<template>
  <div class="col-2 my-1">
    <div class="card text-center" style="background-color: rgba(245, 245, 245, 0.4);">
      <div class="card-body" style="opacity: 1;">
        <h5 class="card-title">{{ playlist.title.toUpperCase() }}</h5>
        <a href="#" class="btn btn-primary shadow-sm m-3" @click.prevent="goTo(playlist.id)">Play</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistCard',
  props: ['playlist'],
  methods: {
    goTo (id) {
      this.$router.push({ name: 'Playlist', params: { id: id } })
    }
  }
}
</script>

<style>

</style>
