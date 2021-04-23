<template>
    <!-- Drinks -->
  <div class="container mb-5" style="color: black;">
    <div class = "text-center mt-5">
      <h1> {{drinkRecipes.name}} </h1>
    </div>

    <div class="row">
      <div class="col-md-5">
        <img :src="drinkRecipes.imgUrl" width="500">
      </div>

      <div class="col-md-4">
        <div class="mt-5">
          <h4>{{drinkRecipes.category}}</h4><br>
          <h5>{{drinkRecipes.alcoholic}}</h5><hr>
        </div>
        <h5 class="mb-3 mt-5">
          Ingredients:
        </h5>
        <div
        v-for="(ingridient, i) in drinkRecipes.ingridients"
        :key="i"
        :ingridient="ingridient"
        >
        <span>{{ingridient}}</span><br>
        </div>
      </div>
    </div>
    <div class="mt-5">
        <h5>Instructions:</h5>
        <p>
          {{drinkRecipes.instructions}}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkRecipes',
  props: ['drinkRecipes']
}
</script>

<style>

</style>
