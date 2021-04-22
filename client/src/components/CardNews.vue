<template>
  <div class="container">
    <div class="row">
      <div class="card mb-3 mr-3" style="max-width: 540px;" v-for="(news,i) in showNews" :key="i">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="news.imageUrl" :alt="news.img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h6 class="card-title">{{news.title}}</h6>
              <a :href="news.link" target="_blank">read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardNews',
  computed: {
    showNews () {
      return this.$store.state.news
    }
  },
  created () {
    this.$store.dispatch('showNews')
  }
}
</script>

<style scoped>
  h1 {
    color: white
  }
  .testing{
    color: white;
  }
</style>
