<template>
  <div id="home">
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-4">
          <MsgBox/>
        </div>
        <div id="movies" class="col-md-8">
          <div id="second-col" class="d-flex flex-column">
            <div class="col-md-8 ms-5 mt-2 mb-2">
              <h4>Welcome to movieForum.net!</h4>
            </div>
            <div class="col-md-6 mb-3">
              <!-- search bar -->
              <form @submit.prevent="searchMovie">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    v-model="search"
                    placeholder="search movie title..."
                  />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              <!-- search bar-end -->
            </div>
            <div class="col-md-12">
              <div class="row">
                <Movie
                  v-for="movie in movies"
                  :key="movie.id"
                  :movie="movie"
                ></Movie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Movie from '../components/Movie'
import MsgBox from '../components/chat/MsgBox'
export default {
  name: 'Home',
  components: {
    Movie,
    MsgBox
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchMovie () {
      const search = this.search
      this.$store.dispatch('searchMovie', { search })
      this.search = ''
    }
  },
  computed: {
    ...mapState(['movies'])
  },
  created () {
    const search = 'movie'
    this.$store.dispatch('searchMovie', { search })
  }
}
</script>
<style>
body {
  background: #c1a1d3;
}
</style>
