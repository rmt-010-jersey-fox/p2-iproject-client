<template>
 <div class="col-lg-4 col-sm-6 mb-4">
    <div class="portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover" v-if="isLogin">
          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img class="img-fluid" :src="card.imgUrl" alt="" />
      </a>
      <div class="portfolio-caption">
        <div class="portfolio-caption-heading">{{ card.name }}</div>
        <div class="portfolio-caption-subheading text-muted">{{ card.address }}</div>
        <div class="row">
          <div class="col-4">Rating</div>
          <div class="col-4"></div>
          <div class="col-4">0 km</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardForEach',
  props: ['card'],
  methods: {
    addAppointment (id) {
      this.$store.dispatch('addAppointment', id)
      this.$store.dispatch('fetchAppointment')
    }
  },
  computed: {
    image () {
      return this.card.image
    },
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
