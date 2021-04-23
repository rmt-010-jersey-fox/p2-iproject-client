<template>
  <div>
    <Navbar></Navbar>
    <div class="row">
      <div id="openweathermap-widget-1" style="display: flex; justify-content: center; margin-top: 50px; margin-bottom: 50px;"></div>
    </div>
    <div class="container">
    <div class="row" style="display: flex; justify-content: center;">
      <div class="card" style="width: 90%;">
        <div class="card-body p-4">
          <h2 class="card-header">{{city}}</h2>
        </div>
        <DestinationsCards
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import DestinationsCards from '../components/DestinationsCards'
export default {
  name: 'Details',
  components: {
    Navbar,
    DestinationsCards
  },
  methods: {
    fetchUserDestination () {
      this.$store.dispatch('fetchUserDestination', this.$route.params.id)
    },
    getOneVacation () {
      // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<masuk')
      this.$store.dispatch('getOneVacation', this.$route.params.id)
        .then(({ data }) => {
          console.log(data, 'datacity?')
          this.$store.commit('getCity', data.city)
        })
        .catch(err => {
          console.log(err, 'getonevacation')
        })
    }
  },
  created () {
    this.fetchUserDestination()
    this.getOneVacation()
  },
  computed: {
    destinations () {
      return this.$store.state.destinations
    },
    city () {
      return this.$store.state.city
    }
  }
}
</script>

<style>

</style>
