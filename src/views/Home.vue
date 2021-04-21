<template>
  <div class="home">
    <Navbar></Navbar>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
    <form>
      <div class="container">
        <div class="row">
          <div class="col">
            <label for="exampleFormControlSelect1">From:</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="province" @change.prevent="findCity(province)">
          <option>Your Home</option>
          <option v-for="el in provinces" :key="el.province_id" :value="el.province_id">{{el.province}}</option>
        </select>
          </div>
          <div class="col">
            <label for="exampleFormControlSelect1">City:</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="city">
          <option v-for="el in cities" :key="el.city_id" :value="el.city_id">{{el.city_name}}</option>
        </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleFormControlSelect1">To:</label>
       <select class="form-control" id="exampleFormControlSelect1" v-model="destination" @change.prevent="findDestinationCity(destination)">
          <option v-for="el in provinces" :key="el.province_id" :value="el.province_id">{{el.province}}</option>
        </select>
          </div>
          <div class="col">
            <label for="exampleFormControlSelect1">City:</label>
         <select class="form-control" id="exampleFormControlSelect1" v-model="destinationCity">
          <option v-for="el in destinationCities" :key="el.city_id" :value="el.city_id">{{el.city_name}}</option>
        </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="inputsm">weight (gr)</label>
        <input class="form-control input-sm" id="inputsm" type="text" v-model="weight">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="searchOngkir">Search</button>
    </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Navbar
  },
  data () {
    return {
      province: '',
      city: '',
      destination: '',
      destinationCity: '',
      weight: ''
    }
  },
  created () {
    this.$store.dispatch('fetchOrigin')
  },
  methods: {
    searchOngkir () {
      const payload = {
        origin: this.city,
        destination: this.destinationCity,
        weight: this.weight
      }
      this.$store.dispatch('fetchOngkir', payload)
    },
    findCity (payload) {
      console.log(this.provinces, payload)
      this.$store.dispatch('fetchCity', payload)
    },
    findDestinationCity (payload) {
      this.$store.dispatch('fetchDestinationCity', payload)
    }
  },
  computed: {
    provinces () {
      return this.$store.state.provinces
    },
    cities () {
      return this.$store.state.cities
    },
    destinationCities () {
      return this.$store.state.destinationCities
    }
  }
}
</script>
