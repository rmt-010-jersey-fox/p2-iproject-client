<template>
  <div class="col-2 my-1">
    <div class="card text-center" style="background-color: rgba(245, 245, 245, 0.4);">
      <div class="card-body" style="opacity: 1;">
        <h5 class="card-title">{{ song.country.toUpperCase() }}</h5>
        <a href="#" class="btn btn-primary shadow-sm m-3" @click.prevent="goTo(song.id)">Play</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongCard',
  props: ['song'],
  methods: {
    goTo (id) {
      this.$router.push({ name: 'Song', params: { id: id } })
    }
  }
}
</script>

<style>

</style>
