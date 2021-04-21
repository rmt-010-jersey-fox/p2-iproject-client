<template>
  <div>
    <NavbarDrink
    :drinksCategories="drinksCategories"
    />
    <!-- Recipes Cards -->

    <div class="container" style="color: bisque;">
      <h1>{{category}}</h1>
      <div class="row">
        <DrinksCard
        :drinks="drinks"
        v-for="(drink, i) in drinks"
        :key="i"
        :drink="drink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DrinksCard from '../components/DrinksCard.vue'
import NavbarDrink from '../components/NavbarDrink'
export default {
  name: 'DrinksCategory',
  components: { NavbarDrink, DrinksCard },
  computed: {
    drinks () {
      return this.$store.state.drinksByCategory
    },
    category () {
      return this.$store.state.currentDrinkCategory
    },
    drinksCategories () {
      // console.log('>>>>', this.$store.state.drinksCategories)
      return this.$store.state.drinksCategories
    }
  }
}
</script>

<style>

</style>
