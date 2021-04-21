<template>
  <div style="margin-top:80px; padding-top:20px; background-color: #e6eaed">
    <!-- Detail Order -->
    <div class="w3-container" style="margin-left: 250px; margin-right: 250px;">
      <div class="w3-panel w3-padding-16 w3-card w3-hover-opacity-off" style="border-radius: 8px; background-color: rgb(7, 112, 205); box-shadow: 0px 4px 10px rgb(3 18 26 / 15%); ">
        <center><h2 style="color: white; font-weight: bolder">Rental Mobil</h2></center>
        <hr style="border-color: white;">
        <button @click.prevent="gotoHome" type="button" class="w3-button w3-right w3-margin-top" style="background-color: rgb(230, 234, 237); border-radius: 8px; color: #0770cd; font-weight: bolder">Ganti Pencarian</button>
        <h5 style="color: white"><i class="fa fa-map-marker" style="padding-right: 24px"></i>{{ location }}</h5>
        <h5 style="color: white"><i class="fa fa-calendar-check-o" style="padding-right: 20px"></i>{{ start_date }}</h5>
        <h5 style="color: white"><i class="fa fa-calendar-times-o" style="padding-right: 20px"></i>{{ end_date }}</h5>
      </div>
    </div>
  <!-- Detail Car -->
    <div class="w3-row-padding w3-padding-16" style="margin-left: 250px; margin-right: 250px;">
      <div v-for="car in data.Cars" :key="car.id" class="w3-third w3-margin-bottom w3-white cars">
        <img :src="car.imgUrl" :alt="car.type" style="width:100%">
        <div class="w3-container" style="padding-top:20px">
          <center><h3 style="font-weight: bolder;">{{ car.type }}</h3></center>
          <hr style="border: 1px solid grey;">
          <h6 class="w3-opacity w3-right">Harga sewa per hari</h6>
          <p>Tranmisi : {{ car.tranmisi }}</p>
          <h2 class=" w3-right" style="color: rgb(255, 94, 31); font-weight: bolder; margin-top: 0">{{ formatRupiah(car.price) }}</h2>
          <p>Warna : {{ car.color }}</p>
          <p>Tahun : {{ car.year }}</p>
          <p class="w3-right" style="background-color: lightgrey; border-radius:20px; padding: 5px 20px">{{ car.status }}</p>
          <p class="w3-large"><i class="fa fa-automobile"></i></p>
          <button @click.prevent="gotoBooking(car.id)" class="w3-button w3-block w3-margin-bottom" style="background-color: rgb(255, 94, 31); border-radius: 5px; font-weight:bolder; color: white">SEWA MOBIL</button>
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
    },
    location () {
      return this.$store.state.location
    },
    start_date () {
      return this.$store.state.start_date
    },
    end_date () {
      return this.$store.state.end_date
    }
  },
  methods: {
    formatRupiah (angka) {
      var reverse = angka.toString().split('').reverse().join('')
      var ribuan = reverse.match(/\d{1,3}/g)
      ribuan = ribuan.join('.').split('').reverse().join('')
      return `Rp. ${ribuan},-`
    },
    gotoBooking (id) {
      this.$router.push('/booking')
      this.$store.dispatch('getCar', id)
    },
    gotoHome () {
      this.$router.push('/')
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
