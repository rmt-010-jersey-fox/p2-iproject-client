<template>
  <div class="col-3 mb-4">
    <div class="btn zoomBook card overflow-auto" style="height:70vh" @click.prevent="$router.push({name:'BookDetail', params:{isbn:book.isbn}})">
    <img :src="book.bookImage" class="card-img-top" alt="...">
    <div class="card-body ">
        <h5 class="card-title">{{book.title}}</h5>
        <p class="card-text">{{book.description}}</p>
        <span class="card-text"><strong>Author: </strong>{{book.author}}</span><br>
        <span class="card-text"><strong>Publisher: </strong>{{book.publisher}}</span><br>
        <p class="card-text"><strong>ISBN: </strong>{{book.isbn}}</p>
        <p>Buy :<a :href="book.productURL" target="_blank"> Amazon </a></p>
    </div>
    </div>
    <div class="card text-center ">
    <button @click.prevent="addWishLists(book.isbn)" class="zoomBook btn btn-primary">Add To Wish List</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book'],
  methods: {
    addWishLists (isbn) {
      const payload = {
        category: this.$route.params.category,
        isbn: isbn
      }
      this.$store.dispatch('addWishLists', payload)
    }
  }
}
</script>

<style>
.zoomBook:hover {
  transform: scale(1.02);
}
</style>
