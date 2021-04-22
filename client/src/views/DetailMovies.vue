<template>
  <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <MovieResult
      v-for="detailPopular in detailPopular"
      :key="detailPopular.id"
      :detailPopular="detailPopular"
      ></MovieResult>
  </div>
  </div>
</section>
</template>

<script>
import MovieResult from '../components/MovieResult'
export default {
  name: 'DetailMovies',
  components: { MovieResult },
  computed: {
    detailPopular () {
      return this.$store.state.detailPopular
    }
  }
}
</script>

<style>

</style>
