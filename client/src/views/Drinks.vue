<template>
  <div>
    <NavbarDrink />
    <DrinkRecipes />
  </div>

</template>

<script>
import NavbarDrink from '../components/NavbarDrink.vue'
import DrinkRecipes from '../components/DrinkRecipes.vue'
export default {
  name: 'Drinks',
  components: { NavbarDrink, DrinkRecipes }
}
</script>

<style>

</style>
