<template>
    <!-- Drinks -->
  <div class="container mb-5" style="color: bisque;">
    <div class = "text-center mt-5">
      <h1> {{randomDrink.name}} </h1>
    </div>

    <div class="row">
      <div class="col-md-5">
        <img :src="randomDrink.imgUrl" width="500">
      </div>

      <div class="col-md-4">
        <div class="mt-5">
          <h4>{{randomDrink.category}}</h4><br>
          <h5>{{randomDrink.alcoholic}}</h5><hr>
        </div>
        <h5 class="mb-3 mt-5">
          Ingridients:
        </h5>
        <div
        v-for="(ingridient, i) in randomDrink.ingridients"
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
          {{randomDrink.instructions}}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkRecipes',
  props: ['randomDrink']
}
</script>

<style>

</style>
