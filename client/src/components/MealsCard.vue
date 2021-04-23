<template>
  <div class="col-md-4 p-5">
    <img :src="meal.strMealThumb" width="300">
    <h5 @click="searchedMeal(meal.strMeal)" class="mt-3">{{meal.strMeal}}</h5>
  </div>
</template>

<script>
export default {
  name: 'MealsCard',
  props: ['meal'],
  methods: {
    searchedMeal (name) {
      this.$store.dispatch('searchMeal', name)
      this.$router.push({ name: 'SearchedMeal' })
    }
  }
}
</script>

<style>

</style>
