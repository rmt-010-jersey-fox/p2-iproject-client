<template>
  <div>
    <NavbarMeal />
    <MealRecipes
    :randomRecipes="randomRecipes"
    :ingredients="ingredients"
    v-for="(ingredient, i) in ingredients"
    :key=i
    :ingredient="ingredient"
    />
  </div>
</template>

<script>
import NavbarMeal from '../components/NavbarMeal'
import MealRecipes from '../components/MealRecipes'
export default {
  name: 'Meals',
  components: { NavbarMeal, MealRecipes },
  computed: {
    randomRecipes () {
      return this.$store.state.randomMeal
    },
    ingredients () {
      console.log(this.$store.state.randomMeal.ingredients)
      return this.$store.state.randomMeal.ingredients
    }
  },
  methods: {
    getRandomRecipes () {
      console.log('masuk ke method sini')
      this.$store.dispatch('getRandomRecipes')
    }
  },
  created () {
    this.getRandomRecipes()
  }
}
</script>

<style>

</style>
