<template>
  <div class="col-md-4 p-5">
    <img :src="meal.strMealThumb" width="200">
    <h5 class="mt-3">{{meal.strMeal}}</h5>
  </div>
</template>

<script>
export default {
  name: 'MealsCard',
  props: ['meal']
}
</script>

<style>

</style>
