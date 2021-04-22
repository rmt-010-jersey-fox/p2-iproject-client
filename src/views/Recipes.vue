<template>
  <div class="container">
    <h1 class="animate__animated animate__headShake">Recipe by Sugar & Calorie</h1>
  <div class="row">
    <CardRecipe
      v-for="(item, i) in recipes"
      :key='i'
      :item='item'
    />
  </div>
</div>
</template>

<script>
import CardRecipe from '../components/CardRecipe'

export default {
  name: 'Recipes',
  components: {
    CardRecipe
  },
  computed: {
    recipes () {
      return this.$store.state.recipes
    }
  },
  created () {
    this.$store.dispatch('fetchRecipeCal')
  }
}
</script>

<style>

</style>