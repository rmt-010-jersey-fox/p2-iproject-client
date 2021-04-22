<template>
  <div class="col-md-4 p-5">
    <img :src="drink.strDrinkThumb" width="300">
    <h5 @click="searchedDrink(drink.strDrink)" class="mt-3">{{drink.strDrink}}</h5>
  </div>
</template>

<script>
export default {
  name: 'DrinksCard',
  props: ['drink'],
  methods: {
    searchedDrink (name) {
      // console.log('masuk searchdrink', name)
      this.$store.dispatch('searchDrink', name)
      this.$router.push({ name: 'SearchedDrink' })
    }
  }
}
</script>

<style>

</style>
