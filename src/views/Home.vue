<template>
  <div class="home">
    <h1 class="animate__animated animate__bounce">Random Diet Recipe</h1>
    <div class="container">
    <!-- <h1>Random Diet Recipe</h1> -->
  <div class="row">
    <CardRandom
      v-for="(recipe, i) in randomRecipe"
      :key='i' :recipe='recipe'
    />
  </div>
</div>
  </div>
</template>
<script>
// @ is an alias to /src
import CardRandom from '../components/CardRandom'
export default {
  name: 'Home',
  // props: ['random'],
  components: {
    CardRandom
  },
  methods: {
    random () {
      // ! ini nih
      this.$store.dispatch('fetchRandom')
    }
  },
  mounted () {
    this.random()
  },
  computed: {
    randomRecipe () {
      console.log(this.$store.state.random, `<<< ini data card random`);
      return this.$store.state.random
    }
  }
}
</script>

<style>
h1 {
    font-family: 'Dela Gothic One', cursive;
  }
</style>
