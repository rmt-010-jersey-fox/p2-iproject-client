<template>
  <div>
    <navbar/>
    <section id="header" class="jumbotron text-center">
      <h1
        class="display-3"
      >
       New Airing Anime
      </h1>
    </section>
    <section id="gallery" style="margin-top: 20px">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-2 mb-2"
            v-for="(anime, idx) in Update"
            :key="idx"
          >
            <div class="card">
              <img :src="anime.image_url" alt="" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">
                  {{ anime.title }}
                </h5>
                 <h5 class="card-title">
                  score: {{ anime.score }}
                </h5>
                <a
                 :href="anime.url"
                  class="btn btn-outline-primary btn-sm"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Update',
  components: { Navbar },
  created () {
    this.$store.dispatch('Update')
  },
  computed: {
    Update () {
      return this.$store.state.Update
    }
  }
}
</script>

<style></style>
