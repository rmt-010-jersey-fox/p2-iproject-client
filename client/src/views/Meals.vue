<template>
  <div>
    <NavbarMeal
    :mealsCategories="mealsCategories"
    />
    <MealRecipes
    :recipes="randomRecipes"
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
    mealsCategories () {
      // console.log('---------------')
      // console.log(this.$store.state.mealsCategories)
      return this.$store.state.mealsCategories
    }
  },
  methods: {
    getRandomRecipes () {
      // console.log('masuk ke method sini')
      this.$store.dispatch('getRandomRecipes')
    },
    getMealsCategories () {
      // console.log('getMealsCategories methods')
      this.$store.dispatch('getMealsCategories')
    }
  },
  created () {
    this.getRandomRecipes()
    this.getMealsCategories()
  }
}
</script>

<style>

</style>
