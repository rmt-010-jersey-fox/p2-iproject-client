<template>
  <div>
    <NavbarDrink
    :drinksCategories="drinksCategories"
    />
    <DrinkRecipes
    :drinkRecipes="randomDrink"
    />
  </div>

</template>

<script>
import NavbarDrink from '../components/NavbarDrink.vue'
import DrinkRecipes from '../components/DrinkRecipes.vue'
export default {
  name: 'Drinks',
  components: { NavbarDrink, DrinkRecipes },
  computed: {
    randomDrink () {
      // console.log('balik ke drinks')
      // console.log(this.$store.state.randomDrink)
      return this.$store.state.randomDrink
    },
    drinksCategories () {
      // console.log('>>>>', this.$store.state.drinksCategories)
      return this.$store.state.drinksCategories
    }
  },
  methods: {
    getRandomDrink () {
      // console.log('method random drink')
      this.$store.dispatch('getRandomDrink')
    },
    getDrinksCategories () {
      // console.log('getDrinksCategories methods')
      this.$store.dispatch('getDrinksCategories')
    }
  },
  created () {
    this.getRandomDrink()
    this.getDrinksCategories()
  }
}
</script>

<style>

</style>
