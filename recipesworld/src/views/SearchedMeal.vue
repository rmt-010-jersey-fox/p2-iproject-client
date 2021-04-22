<template>
  <div>
    <NavbarMeal
    :mealsCategories="mealsCategories"
    />
    <MealRecipes
    :recipes="searchedMeal"
    />
  </div>
</template>

<script>
import NavbarMeal from '../components/NavbarMeal'
import MealRecipes from '../components/MealRecipes'
export default {
  name: 'SearchedMeal',
  components: { NavbarMeal, MealRecipes },
  computed: {
    searchedMeal () {
      return this.$store.state.searchedMeal
    },
    mealsCategories () {
      return this.$store.state.mealsCategories
    }
  }
}
</script>

<style>

</style>
