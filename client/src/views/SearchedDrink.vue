<template>
  <div>
    <NavbarDrink
    :drinksCategories="drinksCategories"
    />
    <DrinkRecipes
    :drinkRecipes="searchedDrink"
    />
  </div>
</template>

<script>
import NavbarDrink from '../components/NavbarDrink.vue'
import DrinkRecipes from '../components/DrinkRecipes.vue'
export default {
  name: 'SearchedDrink',
  components: { NavbarDrink, DrinkRecipes },
  computed: {
    searchedDrink () {
      return this.$store.state.searchedDrink
    },
    drinksCategories () {
      return this.$store.state.drinksCategories
    }
  }
}
</script>

<style>

</style>
