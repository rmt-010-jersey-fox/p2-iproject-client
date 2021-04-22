<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Provide you movie list that you can choose to add to your "watch list"</p>

    <div class="general">
      <h2 class="latest-text w3_latest_text">Featured Movies</h2>
      <div class="container">
        <ul id="myTab" class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a @click.prevent="getNewMovie" href="#home" id="home-tab" role="tab">New Movies</a>
          </li>
          <li role="presentation">
            <a @click.prevent="getPopularMovie" href="#profile" role="tab" id="profile-tab">Popular</a>
          </li>
          <li role="presentation">
            <a @click.prevent="getTopRatedMovie" href="#rating" id="rating-tab" role="tab">Top Rated</a>
          </li>
          <li role="presentation">
            <a @click.prevent="getUpcomingMovie" href="#imdb" role="tab" id="imdb-tab">Upcoming</a>
          </li>

        </ul>

        <div class="container" style="margin-top: 0.5cm">

            <div v-if="thisPage == 'NewMovies'" class="row bg-faded">
              <CartMovie
              v-for="movie in newMovie"
              :key="movie.id"
              :movie="movie"
              ></CartMovie>
            </div>

            <div v-if="thisPage == 'PopularMovies'" class="row bg-faded">
              <CartMovie
              v-for="movie in popularMovie"
              :key="movie.id"
              :movie="movie"
              ></CartMovie>
            </div>

            <div v-if="thisPage == 'TopRatedMovies'" class="row bg-faded">
              <CartMovie
              v-for="movie in topRatedMovie"
              :key="movie.id"
              :movie="movie"
              ></CartMovie>
            </div>

            <div v-if="thisPage == 'UpcomingMovies'" class="row bg-faded">
              <CartMovie
              v-for="movie in upcomingMovie"
              :key="movie.id"
              :movie="movie"
              ></CartMovie>
            </div>
              
            <div style="margin-bottom: 3cm" class="container">
              <div class="row">
                <div class="col text-center">
                  <button @click.prevent="previousMovie()" type="button" class="btn btn-primary">Previous</button>
                  <button style="margin-left: 1cm;" @click.prevent="nextMovie()" type="button" class="btn btn-primary">Next</button>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartMovie from './CardMovie.vue'

export default {
  name: "Movie",
  data () {
    return {
      thisPage: 'NewMovies'
    }
  },
  props: ["title"],
  components: {
    CartMovie
  },
  methods: {
    getNewMovie() {
      this.thisPage = 'NewMovies'
      this.$store.dispatch('getNewMovie')
    },
    getPopularMovie() {
      this.thisPage = 'PopularMovies'
      this.$store.dispatch('getPopularMovie')
    },
    getTopRatedMovie() {
      this.thisPage = 'TopRatedMovies'
      this.$store.dispatch('getTopRatedMovie')
    },
    getUpcomingMovie() {
      this.thisPage = 'UpcomingMovies'
      this.$store.dispatch('getUpcomingMovie')
    },
    nextMovie() {
      this.$store.commit('chagePage', this.getPageCount + 1)
      this.$store.dispatch('getNewMovie')
    },
    previousMovie() {
      if (this.getPageCount > 1) {
        this.$store.commit('chagePage', this.getPageCount - 1)
        this.$store.dispatch('getNewMovie')
      } else {
        this.$store.commit('chagePage', 1)
        this.$store.dispatch('getNewMovie')
      }
    }
  },
  computed: {
    newMovie() {
      return this.$store.getters.getNewMovie
    },
    popularMovie() {
      return this.$store.getters.getPopularMovie
    },
    topRatedMovie() {
      return this.$store.getters.getTopRatedMovie
    },
    upcomingMovie() {
      return this.$store.getters.getUpcomingMovie
    },
    getPageCount() {
      return this.$store.getters.getPageCount
    }
  },
  created() {
    this.$store.dispatch('getNewMovie')
  }
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b1b9;
}
</style>
