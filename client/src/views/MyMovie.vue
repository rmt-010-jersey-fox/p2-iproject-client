<template>
  <div class="container">
      <h1>MY MOVIE LIST</h1><br>
    <div class="row bg-faded">
      <MyMovie
        v-for="movie in myMovies"
        :key="movie.id"
        :movie="movie"
      ></MyMovie>
    </div>
  </div>
</template>

<script>
import MyMovie from "../components/MyMoviesCard";

export default {
  components: {
    MyMovie,
  },
  data() {
    return {
      imageLink: "https://image.tmdb.org/t/p/original/",
    };
  },
  computed: {
    myMovies() {
      return this.$store.getters.getMyMovies;
    },
  },
  created() {
    this.$store.dispatch("showMyMovies");
  },
};
</script>

<style>
</style>