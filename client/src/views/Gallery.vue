<template>
  <section id="user-gallery">
        <div class="container mt-5">
            <h1>YOUR GALLERIES</h1>
            <hr class="mt-3">
            <div class="row">
                <GalleryCard
                v-for="pic in galleries"
                :key="pic.id"
                :picture="pic"
                >
                </GalleryCard>
            </div>
        </div>
    </section>
</template>

<script>
import GalleryCard from '../components/GalleryCard'
export default {
  name: 'Gallery',
  computed: {
    galleries () {
      return this.$store.state.galleries
    }
  },
  components: {
    GalleryCard
  },
  created () {
    this.$store.dispatch('fetchGalleries')
  }
}
</script>

<style>

</style>
