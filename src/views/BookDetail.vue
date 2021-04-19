<template>
    <div class="container">
      <br>
      <br>
      <br>
      <br>
    <div class="row">
      <!-- kolom detail -->
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-7">
                <img :src="book.bookImage" class="w-100"
                  alt="">
              </div>
              <!-- data detail buku -->
              <div class="col-5">
                <br>
                <h5 class="card-title">{{book.title}}</h5>
                <p class="card-text">{{book.description}}</p>
                <span class="card-text"><strong>Author: </strong>{{book.author}}</span><br>
                <span class="card-text"><strong>Publisher: </strong>{{book.publisher}}</span><br>
                <p class="card-text"><strong>ISBN: </strong>{{book.isbn}}</p>
                <p>Buy :<a :href="book.productURL" target="_blank"> Amazon </a></p>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <!-- like -->
              <div class="col-6">
                <div class="card bg-dark">
                  <div class="card-header">
                    <a class="btn btn-success fs-5 w-100">Like This Book</a>
                  </div>
                  <div class="card-body ">
                    <h3 class="text-center text-white">3 users</h3>
                    <p class="text-center text-white"> like this book</p>
                  </div>
                </div>
              </div>
              <!-- wishlist -->
              <div class="col-6">
                <div class="card bg-dark">
                  <div class="card-header">
                    <a @click.prevent="addWishLists(book.isbn)" class="btn btn-info fs-5 w-100">Add To Wishlist</a>
                  </div>
                  <div class="card-body ">
                    <span></span>
                    <h3 class="text-center text-white">3 users</h3>
                    <p class="text-center text-white">wish to has this book </p>
                  </div>
                </div>
              </div>
              <!-- comment -->
              <div class="row mt-3">
                <div class="col">
                  <div class="input-group">
                    <span class="btn btn-warning input-group-text">Submit Komentar</span>
                    <textarea v-model="komentar" class="form-control" aria-label="With textarea"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- kolom komentar -->
      <div class="col-6">
        <div class="card text-white text-center bg-secondary mb-3">
          <div class="card-header fs-5">Apa Kata Orang-Orang?</div>
          <div class="card-body">
            <!-- LOOPING DISINI -->
            <div class="card text-dark bg-light mb-3">
              <div class="card-header">Username : tes1</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
              </div>
            </div>
            <!-- BERHENTI LOOPING DISINI -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      komentar : ''
    }
  },
  methods: {
    addWishLists(isbn) {
      let payload = {
        isbn: isbn
      }
      this.$store.dispatch('addWishLists', payload)
    }
  },
  computed: {
    book() {
      return this.$store.state.book
    }
  },
  created() {
    this.$store.dispatch('fetchOneBook', this.$route.params.isbn)
    // console.log(this.$store.state.book);
  }
}
</script>

<style>

</style>