<template>
  <!-- Portfolio Grid-->
  <div>
    <Header />
    <section class="page-section bg-light" id="portfolio">
    <div class="container">
    <div class="text-left">
        <h2 class="section-heading text-uppercase">On Progress Appointment</h2>
    </div>
    <div class="row">
      <!-- here -->
      <div class="list-group">
      <a class="list-group-item list-group-item-action flex-column align-items-start">
        <span class="mb-1" style="-webkit-text-stroke: 2px white;">----------------------------------------------------------------------------------------------------------------------------------</span>
        <h5 class="mb-1">{{ barbershop.name }}</h5>
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ service.name }}</h5>
          <small class="text-muted">Rp. {{ service.price }}</small>
        </div>
        <br>
        <small class="d-flex w-100">{{ barbershop.address }}</small>
        <small class="d-flex w-100">{{ appointment.scheduleStart }} WIB</small>
        <button @click.prevent="deleteAppointment" class="btn btn-primary">Cancel</button>
      </a>
      </div>
    </div>
    </div>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'Home',
  components: { Header },
  created () {
    this.$store.dispatch('fetchAppointment')
  },
  methods: {
    deleteAppointment () {
      this.$store.dispatch('deleteAppointment')
      this.$store.dispatch('fetchAppointment')
    }
  },
  computed: {
    appointment () {
      return this.$store.state.appointment
    },
    barbershop () {
      return this.$store.state.cards.find(({ id }) => id === this.$store.state.appointment.BarberShopId)
    },
    service () {
      const data = this.$store.state.cards.find(({ id }) => id === this.$store.state.appointment.BarberShopId)
      return data.Services.find(({ id }) => id === this.$store.state.appointment.ServiceId)
    }
  }
}
</script>
