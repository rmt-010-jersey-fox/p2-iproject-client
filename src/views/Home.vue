<template>
  <div>
    <Navbar></Navbar>
    <div class="row">
      <div id="openweathermap-widget-1" style="display: flex; justify-content: center; margin-top: 50px; margin-bottom: 50px;"></div>
    </div>
    <VacationCard
    v-for="vacation in vacations"
    :key="vacation.id"
    :vacation="vacation"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import VacationCard from '../components/VacationCards'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar,
    VacationCard
  },
  methods: {
    fetchVacation () {
      this.$store.dispatch('fetchVacation')
    }
  },
  created () {
    this.fetchVacation()
  },
  computed: {
    ...mapState([
      'vacations'
    ])
  }
}
</script>
