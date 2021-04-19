<template>
  <div class="editAnime">
    <div style="height: 1rem"/>
    <div class="container  is-flex is-align-items-center is-justify-content-center" style="min-height: 100vh">
      <div class="column p-5 is-6">
          <form class="box" @submit.prevent= "editAnime(anime)">
            <h5 class="subtitle is-5">Edit the Anime here:</h5>
            <div class="field">
              <label class="label">title</label>
              <div class="control">
                <input class="input" type="text" placeholder="Edit title" v-model= "animeTitle">
              </div>
            </div>
            <div class="field">
              <label class="label">Image URL</label>
              <div class="control">
                <input class="input" type="text" placeholder="Edit URL" v-model= "animeImage">
              </div>
            </div>
            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <input class="input" type="number" placeholder="Edit Status" v-model= "animeStatus">
              </div>
            </div>
            <div class="field">
              <label class="label">Duration</label>
              <div class="control">
                <input class="input" type="number" placeholder="Edit Duration" v-model= "animeDuration">
              </div>
            </div>
            <div class="field">
              <label class="label">Score</label>
              <div class="control">
                <input class="input" type="text" placeholder="Edit Score" v-model= "animeScore">
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-info">Submit</button>
              </div>
              <div class="control">
                <router-link class="button is-danger" to="/">Cancel</router-link>
              </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditAnime',
  methods: {
    editAnime (value) {
      const obj = {
        id: this.$route.params.id,
        title: value.title,
        image_url: value.image_url,
        status: value.status,
        duration: value.duration,
        score: value.score
      }
      // console.log(obj)
      this.$store.dispatch('editAnime', obj)
        .then(res => {
          // console.log(res.data)
          this.$swal.fire({
            icon: 'success',
            title: 'Edit success',
            text: `Successing edit anime "${res.data.title}"`,
            timer: 5000
          })
          this.$store.dispatch('fetchAnime')
          this.$router.push('/')
        })
        .catch(err => {
          const status = `${err.response.status} ${err.response.statusText}`
          const message = err.response.data.message.toString().replace(/,/g, ', ')
          this.$swal.fire({
            icon: 'error',
            title: `${status}`,
            text: `${message}`,
            footer: 'Please check again before you submit',
            timer: 3000
          })
        })
        .finally(() => {
          this.title = ''
          this.image_url = ''
          this.status = ''
          this.duration = ''
          this.score = ''
        })
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('getAnime', id)
  },
  computed: {
    anime () {
      return this.$store.state.anime
    },
    animeTitle: {
      get () {
        return this.$store.state.anime.title
      },
      set (value) {
        this.$store.commit('CHANGE_TITLE', value)
      }
    },
    animeImage: {
      get () {
        return this.$store.state.anime.image_url
      },
      set (value) {
        this.$store.commit('CHANGE_IMAGE', value)
      }
    },
    animeStatus: {
      get () {
        return this.$store.state.anime.status
      },
      set (value) {
        this.$store.commit('CHANGE_STATUS', value)
      }
    },
    animeDuration: {
      get () {
        return this.$store.state.anime.duration
      },
      set (value) {
        this.$store.commit('CHANGE_DURATION', value)
      }
    },
    animeScore: {
      get () {
        return this.$store.state.anime.score
      },
      set (value) {
        this.$store.commit('CHANGE_SCORE', value)
      }
    }
  }
}
</script>

<style>

</style>
