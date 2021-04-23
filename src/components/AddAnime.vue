<template>
   <div class="row mb-3 mt-3">
    <div class="col">
      <h1 class="mb-3">Add Anime To Reminder</h1>
      <form @submit.prevent="handleAddNewAnime">
        <div class="form-group mt-1 row">
          <label for="input-name" class="col-sm-2 col-2 col-form-label"
            >Name</label
          >
          <div class="col-sm-10 col-10">
            <input
              type="text"
              v-model="name"
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
              v-model="imageURL"
              class="form-control"
              id="input-image"
            />
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-episodes" class="col-sm-2 col-2 col-form-label"
            >Episodes Watched</label
          >
          <div class="col-sm-10 col-10">
            <input
              type="number"
              v-model="episodes"
              class="form-control"
              id="input-episodes"
            />
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-totalEpisodes" class="col-sm-2 col-2 col-form-label"
            >Total Anime Episodes</label
          >
          <div class="col-sm-10 col-10">
            <input
              type="number"
              v-model="totalEpisodes"
              class="form-control"
              id="input-totalEpisodes"
            />
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNewAnime',
  data () {
    return {
      name: '',
      imageURL: '',
      episodes: '0',
      totalEpisodes: ''
    }
  },
  methods: {
    handleAddNewAnime () {
      const { name, imageURL, episodes, totalEpisodes } = this
      this.$store.dispatch('handleAddAnime', {
        name,
        imageURL,
        episodes,
        totalEpisodes

      })
      this.name = ''
      this.imageURL = ''
      this.episodes = '0'
      this.totalEpisodes = ''
    }
  },
  computed: {
    animes () {
      return this.$store.state.animes
    }
  }
}

</script>

<style>
</style>
