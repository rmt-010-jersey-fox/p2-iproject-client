<template>
  <div class="col-3 mt-4">
    <div class="btn zoom card overflow-auto" style="height:70vh" @click.prevent="$router.push({name:'BookDetail', params:{isbn:wishlist.isbn}})">
      <img :src="wishlist.bookImage" class="card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title">{{wishlist.title}}</h5>
        <p class="card-text">{{wishlist.description}}</p>
        <span class="card-text"><strong>Author: </strong>{{wishlist.author}}</span><br>
        <span class="card-text"><strong>Publisher: </strong>{{wishlist.publisher}}</span><br>
        <p class="card-text"><strong>ISBN: </strong>{{wishlist.isbn}}</p>
        <p>Buy :<a :href="wishlist.productURL" target="_blank"> Amazon </a></p>
      </div>
    </div>
    <div class="card text-center ">
      <button @click.prevent="deleteWishlist(wishlist.isbn)" class="zoom btn btn-danger">Delete From Wish List</button>
    </div>
  </div>
</template>

<script>
export default {
  name : 'WishlistCard',
  props : ['wishlist'],
  methods : {
    deleteWishlist(isbn) {
      this.$store.dispatch('deleteWishlist', isbn)
    }
  }
}
</script>

<style>
.zoom:hover {
  transform: scale(1.02);
}
</style>