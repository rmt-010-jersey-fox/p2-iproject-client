<template>
  <div class="home">
    <Movie title="Welcome iO-Movie"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from '@/components/Movie.vue'

export default {
  name: 'Home',
  components: {
    Movie
  }
}
</script>
