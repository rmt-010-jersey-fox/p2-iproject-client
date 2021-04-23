<template>
  <div class="row mb-3 mt-3">
      <div class="col">
          <h1 class="mb-3">Update Watched Anime</h1>
          <form @submit.prevent="handlePatch">
              <div class="form-group mt-1 row">
          <label for="input-episodes" class="col-sm-2 col-2 col-form-label"
            >Episodes</label
          >
          <div class="col-sm-10 col-10">
            <input
              type="number"
              v-model="animeById.episodes"
              class="form-control"
              id="input-episodes"
            />
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Update</button>
        </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PatchAnime',
  data () {
    return {}
  },
  props: [],
  methods: {
    handlePatch () {
      this.$store.dispatch('patchAnime', {
        id: this.$route.params.id,
        episodes: this.animeById.episodes
      })
    },
    getDataPatch () {
      this.$store.dispatch('getDataPatch', this.$route.params.id)
    }
  },
  created () {
    this.getDataPatch()
  },
  computed: {
    animeById () {
      return this.$store.state.anime
    }
  }
}
</script>

<style>
</style>
