<template>
  <section>
    <div class="d-flex justify-content-center mt-5 mb-5">
      <form @submit.prevent="handleSearch" class="form-inline my-2 my-lg-0">
        <input v-model="search" class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div>
      <div class="container mt-5">
            <h1>SEARCH FOR INSPIRATIONS</h1>
            <hr class="mt-3">
            <div class="row">
              <DiscoverCard
              v-for="picture in pexels"
              :key="picture.id"
              :picture="picture"
              >
              </DiscoverCard>
            </div>
      </div>
    </div>
  </section>
</template>

<script>
import DiscoverCard from '../components/DiscoverCard'
export default {
  name: 'Discover',
  data () {
    return {
      search: ''
    }
  },
  components: {
    DiscoverCard
  },
  methods: {
    handleSearch () {
      this.$store.dispatch('fetchPexels', {
        search: this.search.toLowerCase()
      })
    }
  },
  computed: {
    pexels () {
      return this.$store.state.pexels
    }
  },
  created () {
    this.$store.dispatch('fetchPexels', {
      search: 'architecture'
    })
  }
}
</script>

<style scoped>
  .image-box {
    width: 10px; /* You can set the dimensions to whatever you want */
    height: 10px;
  }
</style>
