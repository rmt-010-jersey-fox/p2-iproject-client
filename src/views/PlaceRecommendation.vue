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
          <h2 class="card-header">Our Recommendation on {{city}}</h2>
        </div>
    <DesListCards
    v-for="googleDestination in googleDestinations"
    :key="googleDestination.id"
    :googleDestination="googleDestination"
    />
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import DesListCards from '../components/DesListCards'
export default {
  name: 'PlaceRecommendation',
  components: {
    Navbar,
    DesListCards
  },
  methods: {
    fetchDestinationList () {
      this.$store.dispatch('fetchDestinationList', this.$route.params.id)
    },
    getOneVacation () {
      this.$store.dispatch('getOneVacation', this.$route.params.id)
        .then(({ data }) => {
          this.$store.commit('getCity', data.city)
        })
        .catch(err => {
          console.log(err, 'getonevacation recom')
        })
    }
  },
  created () {
    this.fetchDestinationList()
    this.getOneVacation()
  },
  computed: {
    googleDestinations () {
      return this.$store.state.googleDestinations
    },
    city () {
      return this.$store.state.city
    }
  }
}
</script>

<style>

</style>
