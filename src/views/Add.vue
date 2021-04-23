<template>
  <!-- Portfolio Grid-->
  <div>
    <header class="masthead" :style="{ 'background-image': 'url(' + cards.imgUrl + ')' }">
      <div class="container">
        <div class="masthead-heading text-uppercase" style="-webkit-text-stroke: 2px black;">{{ cards.name }}</div>
        <div style="-webkit-text-stroke: 1px #FED136;"> <h4>{{ cards.open }} - {{ cards.closed }}</h4></div>
        <h4 class="text" style="-webkit-text-stroke: 1px black;">{{  cards.address }}</h4>
      </div>
    </header>
    <section class="page-section bg-light" id="portfolio">
    <div class="container">
    <div class="row">
      <form @submit.prevent="makeAnAppointment">
          <h2>Appointment Form</h2><hr class="my-4">
          <div class="form-group">
            <label for="barber">
              Barber
            </label>
            <select class="form-control" name="purchase_order_number" id="purchase_order_number" v-model="BarberId">
              <option v-for="barber in cards.Barbers" :key="barber.id" :value="barber.id">
                {{ barber.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">
              Date
            </label>
            <input class="form-control" v-model="date" type="date" id="example-date-input" required>
          </div>
            <div class="form-group">
            <label for="exampleInputPassword1">
              Date
            </label>
            <input class="form-control" v-model="scheduleStart" type="time" id="example-time-input">
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      BarberId: '',
      date: '',
      scheduleStart: '',
      scheduleEnd: ''
    }
  },
  methods: {
    makeAnAppointment () {
      this.$store.dispatch('postAppointment', {
        BarberShopId: this.$store.state.booking.id,
        ServicesId: this.$store.state.serviceId,
        BarberId: this.BarberId,
        date: this.date,
        scheduleStart: this.scheduleStart
      })
    }
  },
  computed: {
    cards () {
      return this.$store.state.booking
    }
  }
}
</script>
