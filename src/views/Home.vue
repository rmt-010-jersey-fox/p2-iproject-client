<template>
  <div class="home">
    <CardRandom 
    />
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
    }
  }
}
</script>
