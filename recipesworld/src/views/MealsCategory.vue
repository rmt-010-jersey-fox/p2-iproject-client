<template>
  <div>
    <NavbarMeal
    :mealsCategories="mealsCategories"
    />
    <!-- Recipes Cards -->
    <div class="container" style="color: black;">
      <h1>{{category}}</h1>
      <div class="row">
        <MealsCard
        :meals="meals"
        v-for="(meal, i) in meals"
        :key="i"
        :meal="meal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MealsCard from '../components/MealsCard.vue'
import NavbarMeal from '../components/NavbarMeal'
export default {
  name: 'MealsCategory',
  components: { NavbarMeal, MealsCard },
  computed: {
    meals () {
      return this.$store.state.mealsByCategory
    },
    category () {
      return this.$store.state.currentMealCategory
    },
    mealsCategories () {
      console.log('---------------')
      console.log(this.$store.state.mealsCategories)
      return this.$store.state.mealsCategories
    }
  }
}

</script>

<style>

</style>
