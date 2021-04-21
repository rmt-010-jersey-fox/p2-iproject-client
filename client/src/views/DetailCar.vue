<template>
  <div style="margin-top:80px; padding-top:20px; background-color: #e6eaed">
    <!-- Detail Order -->
    <div class="w3-container" style="margin-left: 250px; margin-right: 250px;">
      <div class="w3-panel w3-padding-16 w3-card w3-hover-opacity-off" style="background-color: rgb(7, 112, 205)">
        <h2>Get the best offers first!</h2>
        <p>Join our newsletter.</p>
        <label>E-mail</label>
        <input class="w3-input w3-border" type="text" placeholder="Your Email address">
        <button type="button" class="w3-button w3-red w3-margin-top">Subscribe</button>
      </div>
    </div>
  <!-- Detail Car -->
    <div class="w3-row-padding w3-padding-16" style="margin-left: 250px; margin-right: 250px;">
      <div v-for="car in data.Cars" :key="car.id" class="w3-third w3-margin-bottom w3-white cars">
        <img :src="car.imgUrl" :alt="car.type" style="width:100%">
        <div class="w3-container" style="padding-top:20px">
          <h3 style="font-weight: bolder">{{ car.type }}</h3>
          <h6 class="w3-opacity w3-right">Rental dasar dari</h6><br><br>
          <h3 class=" w3-right" style="color: rgb(255, 94, 31); font-weight: bolder; margin-top: 0">Rp. {{ car.price }}</h3>
          <p>{{ car.tranmisi }}</p>
          <p>{{ car.color }}</p>
          <p>{{ car.year }}</p>
          <p>{{ car.status }}</p>
          <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
          <button class="w3-button w3-block w3-margin-bottom" style="background-color: rgb(255, 94, 31)">Sewa mobil</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCar',
  computed: {
    data () {
      return this.$store.state.CarByLoc[0]
    }
  }

}
</script>

<style>
.cars {
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  width: 31%;
  box-shadow: 0px 4px 10px rgb(3 18 26 / 15%);
  background-color: rgba(255,255,255,1.00);
}

</style>
