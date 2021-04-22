<template>
  <div class="container mt-5 mb-5">
            <h1 class="mb-3">CATEGORIES</h1>
            <div class="row">
                <div class="col-3">
                    <button @click="handleNature" class="btn btn-lg btn-success rounded-pill">NATURE</button>
                </div>
                <div class="col-3">
                     <button @click="handleMusic" class="btn btn-lg btn-primary btn-dark rounded-pill">MUSIC</button>
                </div>
                <div class="col-3">
                     <button @click="handleAnimals" class="btn btn-lg btn-primary btn-warning rounded-pill">ANIMALS</button>
                </div>
                <div class="col-3">
                     <button @click="handlePlaces" class="btn btn-lg btn-primary btn-info rounded-pill">PLACES</button>
                </div>
            </div>
            <hr class="mt-3 mb-3">
            <div class="row">
              <!-- INSERT CARD HERE -->
              <CategoryCard
              v-for="picture in pixaImages"
              :key="picture.id"
              :picture="picture"
              >
              </CategoryCard>
            </div>
    </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard'
export default {
  name: 'Categories',
  data () {
    return {
      page: 1
    }
  },
  components: {
    CategoryCard
  },
  computed: {
    pixaImages () {
      return this.$store.state.pixa
    }
  },
  methods: {
    handleNature () {
      this.$store.dispatch('fetchPixa', {
        category: 'nature',
        page: this.page++
      })
    },
    handleMusic () {
      this.$store.dispatch('fetchPixa', {
        category: 'music',
        page: this.page++
      })
    },
    handleAnimals () {
      this.$store.dispatch('fetchPixa', {
        category: 'animals',
        page: this.page++
      })
    },
    handlePlaces () {
      this.$store.dispatch('fetchPixa', {
        category: 'places',
        page: this.page++
      })
    }
  },
  created () {
    this.$store.dispatch('fetchPixa', {
      category: 'animals'
    })
  }
}
</script>

<style>

</style>
