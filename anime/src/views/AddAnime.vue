<template>
  <div class="addAnime">
    <div style="height: 1rem"/>
    <div class="container  is-flex is-align-items-center is-justify-content-center" style="min-height: 100vh">
      <div class="column p-5 is-6">
          <form class="box" @submit.prevent= "addAnime">
            <h5 class="subtitle is-5">Add the Anime here:</h5>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" type="text" placeholder="Input title Anime" v-model= "title">
              </div>
            </div>
            <div class="field">
              <label class="label">Image URL</label>
              <div class="control">
                <input class="input" type="text" placeholder="Input Image URL Anime" v-model= "image_url">
              </div>
            </div>
            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <input class="input" type="text" placeholder="Input status Anime" v-model= "status">
              </div>
            </div>
            <div class="field">
              <label class="label">duration</label>
              <div class="control">
                <input class="input" type="text" placeholder="Input duration Anime" v-model= "duration">
              </div>
            </div>
            <div class="field">
              <label class="label">score</label>
              <div class="control">
                <input class="input" type="text" placeholder="Input score Anime" v-model= "score">
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
  name: 'AddAnime',
  data () {
    return {
      title: '',
      image_url: '',
      status: '',
      duration: '',
      score: ''
    }
  },
  methods: {
    addAnime () {
      const obj = {
        title: this.title,
        image_url: this.image_url,
        status: this.status,
        duration: this.duration,
        score: this.score
      }
      // console.log(obj)
      this.$store.dispatch('addAnime', obj)
        .then(res => {
          // console.log(res.data)
          this.$swal.fire({
            icon: 'success',
            title: 'Add success',
            text: `Successing add Anime "${res.data.title}"`,
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
  }
}
</script>

<style>

</style>
