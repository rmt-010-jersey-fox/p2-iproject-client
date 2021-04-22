<template>
  <div>
    <div class="col-sm">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="nutrition.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ nutrition.title }}</h5>
          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
          <h6 v-for="(nutrient, i) in nutrition.nutrition.nutrients"
            :key="i"
          >{{nutrient.title}}: {{nutrient.percentOfDailyNeeds}}%</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardNutrient',
  props: ['nutrition']
}
</script>

<style>

</style>