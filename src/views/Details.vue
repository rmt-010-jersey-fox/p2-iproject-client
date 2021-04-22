<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-6 p-2">
        <div class="card text-white bg-dark m-1 col">
          <img
            style="width:300px"
            :src="details.Poster"
            class="card-img-top m-3"
            alt="..."
          />
          <div class="ms-3"><button @click.prevent="addToWatchlist(details.imdbID)" class="btn btn-success">Add to Watchlist</button></div>
          <div class="card-body">
            <h5 class="card-title mb-5">{{ details.Title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Released Date:</h6>
            <p class="card-text">{{ details.Released }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Genre:</h6>
            <p class="card-text">{{ details.Genre }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Production</h6>
            <p class="card-text">{{ details.Production }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Director</h6>
            <p class="card-text">{{ details.Director }}</p>
            <h6 class="card-subtitle mb-2 text-muted">imdb Rating</h6>
            <p class="card-text">{{ details.imdbRating }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Plot</h6>
            <p class="card-text">{{ details.Plot }}</p>
          </div>
        </div>

        <div class="card text-white bg-dark m-1 col">
          <div class="card-body">
            <form
              @submit.prevent="addComment"
              class="row justify-content-center"
            >
              <div class="mb-3 col">
                <label for="comment" class="form-label">Add Comment</label>
                <textarea
                  v-model="comment"
                  class="form-control"
                  rows="3"
                ></textarea>
                <button type="submit" class="btn btn-primary mt-3 flex-end">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-6 p-1">
        <div class="container m-1">
          <h5>Comments: </h5>
          <div class="row d-flex flex-column">
            <Comment v-for="com in comments" :key="com.id" :com="com" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Comment from '../components/Comment'
export default {
  name: 'Details',
  components: {
    Comment
  },
  computed: {
    ...mapState(['details', 'comments'])
  },
  data () {
    return {
      comment: ''
    }
  },
  created () {
    const movieId = this.$route.params.imdbID
    this.$store.dispatch('movieDetail', movieId)
    this.$store.dispatch('fetchComments', movieId)
  },
  methods: {
    addComment () {
      const comment = this.comment
      const imdbId = this.$route.params.imdbID
      const commentInfo = { comment, imdbId }

      this.$store.dispatch('addComment', commentInfo)
      this.comment = ''
    },

    addToWatchlist (MovieId) {
      const poster = this.details.Poster
      const title = this.details.Title
      const input = { poster, title, MovieId }
      this.$store.dispatch('addWatch', input)
    }
  }
}
</script>

<style></style>
