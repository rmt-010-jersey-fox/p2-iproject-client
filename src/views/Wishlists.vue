<template>
  <!--START WISHLIST  -->
  <section id="wishList">
     <br>
    <br>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-9 mb-2">
          <a class="btn btn-link text-dark fs-5" style="display: inline-block">Search By Name:</a>
          <input v-model="searchByTitle" type="text" class="form-control fs-5" aria-describedby="inputGroup-sizing-sm" placeholder="type the title....." style="display: inline-block; width:25vw">
        </div>
      </div>
      <div class="row" id="wishListCard">
        <!-- awal loop -->
       <WishlistCard
       v-for="wishlist in wishlists"
       :key="wishlist.id"
       :wishlist="wishlist"
       />
        <!-- akhir loop -->
      </div>
    </div>
  </section>
  <!-- END WISHLIST -->
</template>

<script>
import WishlistCard from '../components/WishlistsCard'
export default {
  data () {
    return {
      searchByTitle : ''
    }
  },
  components : {WishlistCard},
  computed : {
    wishlists () {
      return this.$store.state.wishlists.filter(e=>{
        return e.title.toLowerCase().includes(this.searchByTitle.toLowerCase())
      })
    }
  },
  created () {
    this.$store.dispatch('fetchWishlists')
  }
}
</script>

<style>

</style>
