<template>
  <div class="col">
      <h1 class="mb-3">Edit Anime</h1>
      <form @submit.prevent="handleEditAnime">
        <div class="form-group mt-1 row">
          <label for="input-name" class="col-sm-2 col-2 col-form-label"
            >Name</label
          >
          <div class="col-sm-10 col-10">
            <input
              type="text"
              v-model="animeById.name"
              class="form-control"
              id="input-name"
            />
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-image" class="col-sm-2 col-2 col-form-label"
            >Image Link</label
          >
          <div class="col-sm-10 col-10">
            <input
              type="text"
              v-model="animeById.imageURL"
              class="form-control"
              id="input-image"
            />
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-episodes" class="col-sm-2 col-2 col-form-label"
            >Episodes</label
          >
          <div class="col-sm-10 col-10">
            <input
              type="number"
              v-model="animeById.episodes"
              class="form-control"
              id="input-price"
            />
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-totalEpisodes" class="col-sm-2 col-2 col-form-label"
            >Total Episodes
          </label>
          <div class="col-sm-10 col-10">
            <input
              type="number"
              v-model="animeById.totalEpisodes"
              class="form-control"
              id="input-totalEpisodes"
            />
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'EditAnime',
  data () {
    return {}
  },
  props: [],
  methods: {
    handleEditAnime () {
      this.$store.dispatch('handleUpdateAnimeById', {
        id: this.$route.params.id,
        name: this.animeById.name,
        imageURL: this.animeById.imageURL,
        episodes: this.animeById.episodes,
        totalEpisodes: this.animeById.totalEpisodes
      })
    },
    getDataById () {
      this.$store.dispatch('getDataById', this.$route.params.id)
    }
  },
  created () {
    this.getDataById()
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
