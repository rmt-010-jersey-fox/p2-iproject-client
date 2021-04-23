<template>
    <!-- Meals -->
    <div class="container" style="color: black;">
      <div class = "text-center mt-5">
        <h1>{{recipes.name}}</h1>
      </div>
      <div class="mt-5">
        <h3>{{recipes.category}}</h3>
      </div>

      <div class="row">
        <div class="col-md-5">
          <img :src="recipes.imgUrl" width="500">
        </div>

        <div class="col-md-4">
          <h5>
            Ingredients:
          </h5>
           <div
           v-for="(ingridient, i) in recipes.ingridients"
            :key="i"
            :ingridient="ingridient">
            <span>{{ingridient}}</span><br>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h5>Instructions:</h5>
        <p>
          {{recipes.instructions}}
        </p>
      </div>

    </div>
</template>

<script>
export default {
  name: 'MealRecipes',
  props: ['recipes']
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
