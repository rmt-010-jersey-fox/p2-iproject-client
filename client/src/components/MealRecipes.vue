<template>
    <!-- Meals -->
    <div class="container" style="color: bisque;">
      <div class = "text-center mt-5">
        <h1>{{randomRecipes.name}}</h1>
      </div>
      <div class="mt-5">
        <h3>{{randomRecipes.category}}</h3>
      </div>

      <div class="row">
        <div class="col-md-5">
          <img :src="randomRecipes.imgUrl" width="500">
        </div>

        <div class="col-md-4">
          <h5>
            Ingridients:
          </h5>
           <div
           v-for="(ingridient, i) in randomRecipes.ingridients"
            :key="i"
            :ingridient="ingridient">
            <span>{{ingridient}}</span><br>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h5>Instructions:</h5>
        <p>
          {{randomRecipes.instructions}}
        </p>
      </div>

    </div>
</template>

<script>
export default {
  name: 'MealRecipes',
  props: ['randomRecipes']
  // components: {
  //   Ingredients
  // },
  // methods: {
  //   ingredients () {
  //     return this.randomRecipes.ingredients
  //   }
  // }

}
</script>

<style>

</style>
