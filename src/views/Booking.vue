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
    <div class="text-left">
      <h2 class="section-heading text-uppercase mb-5">Choose Services for You</h2>
    </div>
    <div class="row">
    <Services
      v-for="card in cards.Services"
      :key="card.id"
      :card = "card">
    </Services>
    </div>
    </div>
    </section>
  </div>
</template>

<script>
import Services from '../components/Services'
export default {
  name: 'Home',
  components: { Services },
  computed: {
    cards () {
      return this.$store.state.booking
    }
  }
}
</script>
