<template>
  <!-- Portfolio Grid-->
  <section class="page-section bg-light" id="portfolio">
  <div class="container">
  <div class="text-center">
      <h2 class="section-heading text-uppercase">BarberShops near you</h2>
  </div>
  <div class="row">
  <CardForEach
    v-for="card in cards"
    :key="card.id"
    :card = "card">
  </CardForEach>
  </div>
  </div>
  </section>
</template>

<script>
import CardForEach from '../components/CardForEach'
export default {
  name: 'Home',
  components: { CardForEach },
  created () {
    this.$store.dispatch('fetchCard')
  },
  computed: {
    cards () {
      return this.$store.state.cards
    }
  }
}
</script>
