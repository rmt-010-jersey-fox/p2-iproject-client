<template>
   <section id="user-favourites">
        <div class="container mt-5">
            <h1>FAVOURITES</h1>
            <hr class="mt-3">
            <div class="row">
                <FavouriteCard
                v-for="favourite in favourites"
                :key="favourite.id"
                :favourite="favourite"
                >
                </FavouriteCard>
            </div>
        </div>
    </section>
</template>

<script>
import FavouriteCard from '../components/FavouriteCard'
export default {
  name: 'Favourites',
  computed: {
    favourites () {
      return this.$store.state.favourites
    }
  },
  components: {
    FavouriteCard
  },
  created () {
    this.$store.dispatch('fetchFavourites')
  }
}
</script>

<style>

</style>
