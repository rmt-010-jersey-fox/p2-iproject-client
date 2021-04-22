<template>
    <!-- <h1>Random Diet Recipe</h1> -->
    <div class="col-sm">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="recipe.image" class="card-img" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{recipe.title}}</h5>
              <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
              <ul>
                <li v-for="(ingredient, i) in recipe.extendedIngredients"
                  :key="i"
                  class="fw-light"
                  >
                  {{ ingredient.originalString }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardRandom',
  props: ['recipe'],
  methods: {
  }
}
</script>

<style>
  
</style>