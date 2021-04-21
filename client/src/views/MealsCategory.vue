<template>
  <div>
    <NavbarMeal />
    <!-- Recipes Cards -->

    <div class="container" style="color: bisque;">
      <h1>Beef</h1>
      <div class="row">
        <div class="col-md-4 p-5">
          <img src="https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg" width="320">
          <h5 class="mt-3">Beef and Mustard Pie</h5>
        </div>

        <div class="col-md-4 p-5">
          <img src="https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg" width="320">
          <h5 class="mt-3">Beef and Oyster pie</h5>
        </div>
        <div class="col-md-4 p-5">
          <img src="https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg" width="320">
          <h5 class="mt-3">Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber</h5>
        </div>

        <div class="col-md-4 p-5">
          <img src="https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg" width="320">
          <h5 class="mt-3">Beef Bourguignon</h5>
        </div>

        <div class="col-md-4 p-5">
          <img src="https://www.themealdb.com/images/media/meals/1529443236.jpg" width="320">
          <h5 class="mt-3">Szechuan Beef</h5>
        </div>

        <div class="col-md-4 p-5">
          <img src="https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg" width="320">
          <h5 class="mt-3">Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMeal from '../components/NavbarMeal'
export default {
  name: 'MealsCategory',
  components: { NavbarMeal }
}
</script>

<style>

</style>
