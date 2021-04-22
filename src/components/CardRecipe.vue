<template>
  <div>
  <div class="col-sm">
        <div class="card" style="border-radius: 15px">
          <div>
          <img class="card-img-top" :src="item.image" alt="Card image cap" style="width: 15rem; border-radius: 15px">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <h6>Calories: {{ item.calories }}</h6>
            <h6>Protein: {{ item.protein }}</h6>
            <h6>Fat: {{ item.fat }}</h6>
            <h6>Carbs: {{ item.carbs }}</h6>
            <h6>Sugar: {{ item.sugar }}</h6>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardRecipe',
  props: ['item']
}
</script>

<style>

</style>