<template>
    <!-- Meals -->
    <div class="container" style="color: bisque;">
      <div class = "text-center mt-5">
        <h1>{{randomRecipes.name}}</h1>
      </div>
      <div class="mt-5">
        <h3></h3>
        <a>{{randomRecipes.category}}</a>
      </div>

      <div class="row">
        <div class="col-md-5">
          <img :src="randomRecipes.imgUrl" width="500">
        </div>

        <div class="col-md-4">
          <h5>
            Ingredients:
          </h5>
          <p>{{randomRecipes.ingridients}}</p>
           <div>
            <p>di ingredients</p>
            <span
            >{{ingredient}}</span><br>
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
  props: ['randomRecipes', 'ingredient']
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
