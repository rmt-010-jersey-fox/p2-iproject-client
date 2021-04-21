<template>
  <div class="col-md-4 p-5">
    <img :src="drink.strDrinkThumb" width="300">
    <h5 class="mt-3">{{drink.strDrink}}</h5>
  </div>
</template>

<script>
export default {
  name: 'DrinksCard',
  props: ['drink']
}
</script>

<style>

</style>
