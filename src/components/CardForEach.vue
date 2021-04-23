<template>
 <div class="col-lg-4 col-sm-6 mb-4">
    <div class="portfolio-item">
      <a class="portfolio-link" @click.prevent="booking(card.id)" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover" v-if="isLogin">
          <div class="portfolio-hover-content"><i class="fas fa-list fa-3x"></i></div>
        </div>
        <img class="img-fluid" :src="card.imgUrl" alt="" />
      <div class="portfolio-caption">
        <div class="portfolio-caption-heading">{{ card.name }}</div>
        <div class="portfolio-caption-subheading text-muted">{{ card.address }}</div>
        <div class="row">
          <div class="col-4">Rating</div>
          <div class="col-4"></div>
          <div class="col-4">0 km</div>
        </div>
      </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardForEach',
  props: ['card'],
  methods: {
    booking (idBarbershop) {
      this.$store.dispatch('booking', this.$store.state.cards.find(({ id }) => id === idBarbershop))
      // this.$store.dispatch('fetchAppointment')
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
