<template>
<section id="home-page" class="container">
    <Navbar></Navbar>

    <div class="row justify-content-center mt-5 pt-5">
      <div class="col-4 mt-5">
        <img src="../assets/fav-1.svg" alt="music" class="img-fluid mt-5">
      </div>
      <div class="col-6">
        <h4>
          <b>Bookmarks</b>
        </h4>
        <ul class="list-unstyled" v-for="favorite in favorites" :key="favorite.id">
          <li class="media d-flex align-items-center bg-white rounded p-2 shadow mt-3">
            <div class="media-body p-1">
              <button
              @click.prevent="deleteFavorite(favorite.id)"
              type="button" class="close float-right" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="text-left">
                  <h5 class="mt-0 mb-0 text-pink">{{favorite.Timeline.status}}</h5>
              </div>
              <div class="text-left mt-2">
                <span class="text-muted">{{favorite.Timeline.UserId}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Favorite',
  components: {
    Navbar
  },
  computed: {
    favorites () {
      return this.$store.state.favorite
    }
  },
  created () {
    this.$store.dispatch('fetchFavorite')
  },
  methods: {
    deleteFavorite (id) {
      this.$store.dispatch('deleteFavorite', id)
      this.$store.dispatch('fetchFavorite')
    },
    home () {
      this.$router.push({ name: 'Home' })
    },
    logout () {
      this.$store.dispatch('logout')
    },
    feedsPage () {
      this.$router.push({ name: 'Feeds' })
    }
  }
}
</script>

<style>

</style>
