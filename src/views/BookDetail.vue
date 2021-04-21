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
                <!-- ICON PLAY -->
                <p class="h1 mb-2"> 
                  <b-icon 
                  class="me-2"
                  icon="play-circle-fill" 
                  animation="fade" 
                  variant="success" 
                  style="cursor: pointer"
                  @click.prevent="speak(book.title, book.description)">
                  </b-icon>
                  <b-icon 
                  icon="stop-fill" 
                  variant="danger" 
                  style="cursor: pointer"
                  @click.prevent="stopSpeak()">
                  </b-icon>
                </p>
                <!-- AKHIR ICON PLAY -->
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
                    <a v-if="!liked" @click="addLike(book.isbn)" class="btn btn-success fs-5 w-100">Like This Book</a>
                    <a v-if="liked" @click.prevent="dislike(book.isbn)" class="btn btn-danger fs-5 w-100">Dislike This Book</a>
                  </div>
                  <div class="card-body ">
                    <h3 class="text-center text-white">{{jumlahLike}} People</h3>
                    <p class="text-center text-white"> like this book</p>
                  </div>
                </div>
              </div>
              <!-- wishlist -->
              <div class="col-6">
                <div class="card bg-dark">
                  <div class="card-header">
                    <a v-if="!wished" @click="addWishLists(book.isbn)" class="btn btn-info fs-5 w-100">Add To Wishlist</a>
                    <a v-if="wished" @click="deleteWishlist(book.isbn)" class="btn btn-danger fs-5 w-100">Remove Wishlist</a>
                  </div>
                  <div class="card-body ">
                    <span></span>
                    <h3 class="text-center text-white">{{jumlahWish}} People</h3>
                    <p class="text-center text-white">wish to has this book </p>
                  </div>
                </div>
              </div>
              <!-- comment -->
              <div class="row mt-3">
                <div class="col">
                  <div v-if="!commented" class="input-group">
                    <textarea v-model="komentar" class="form-control" aria-label="With textarea"></textarea>  
                    <span @click.prevent="addComment(book.isbn)" class="btn btn-warning input-group-text fs-5">Submit Comment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- kolom komentar -->
      <div class="col-6">
        <div class="card overflow-auto text-white text-center bg-secondary mb-3" style="max-height:80vh">
          <div class="card-header fs-5"><!-- ICON PLAY -->
                <span class="h3 me-2"> 
                  <b-icon 
                  icon="play-circle-fill" 
                  animation="fade" 
                  variant="primary" 
                  style="cursor: pointer"
                  @click.prevent="speakComments(comments)">
                  </b-icon>
                </span>
                <span class="h3 me-2"> 
                  <b-icon 
                  icon="stop-fill" 
                  variant="danger" 
                  style="cursor: pointer"
                  @click.prevent="stopSpeak()">
                  </b-icon>
                </span>
                <!-- AKHIR ICON PLAY -->
                Apa Kata Orang-Orang? <span class="text-secondary">etasdfdf</span>
          </div>
          <div class="card-body">
            <!-- LOOPING DISINI -->
            <CommentCard
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"
            />
            <!-- BERHENTI LOOPING DISINI -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
import CommentCard from '../components/CommentCard'
export default {
  data() {
    return {
      komentar: ''
    }
  },
  components: { CommentCard, BIcon },
  methods: {
    addWishLists(isbn) {
      let payload = {
        isbn: isbn
      }
      this.$store.dispatch('addWishLists', payload)
    },
    addLike(isbn) {
      let payload = {
        isbn: isbn
      }
      this.$store.dispatch('addLike', payload)
    },
    dislike(isbn) {
      let payload = {
        isbn: isbn
      }
      this.$store.dispatch('dislike', payload)
    },
    addComment(isbn) {
      let payload = {
        isbn: isbn,
        comment: this.komentar
      }
      this.$store.dispatch('addComment', payload)
    },
    deleteWishlist(isbn) {
      this.$store.dispatch('deleteWishlist', isbn)
    },
    speak(text1, text2) {
      let msg = new SpeechSynthesisUtterance()
      msg.text = text1
      msg.rate = 0.8
      window.speechSynthesis.speak(msg)
      msg.text = text2
      setTimeout(function() {
        window.speechSynthesis.speak(msg)
      }, 1000)
    },
    stopSpeak () {
      window.speechSynthesis.cancel();
    },
    speakComments(array) {
      let msg = new SpeechSynthesisUtterance()
      msg.rate = 0.8
      msg.lang = 'id'
      let list = []
      for (let i = 0; i < array.length; i++) {
        list.push(`kata ${array[i].username} . ${array[i].comment}`)
      }
      if (list.length) {
        msg.text = list[0]
        window.speechSynthesis.speak(msg)
        msg.addEventListener('end', ()=> {
          window.setTimeout(() => {
            this.speakComments(array.slice(1))
          }, 500)
        })
      }
    }
  },
  computed: {
    commented() {
      let commented = false
      this.$store.state.comments.forEach(e => {
        if (e.commented) {
          commented = true
        }
      })
      return commented
    },
    liked() {
      return this.$store.state.wishLikeAmount.liked
    },
    wished() {
      return this.$store.state.wishLikeAmount.wished
    },
    book() {
      return this.$store.state.book
    },
    comments() {
      return this.$store.state.comments
    },
    jumlahLike() {
      return this.$store.state.wishLikeAmount.jumlahLike
    },
    jumlahWish() {
      return this.$store.state.wishLikeAmount.jumlahWish
    }
  },
  created() {
    this.$store.dispatch('fetchOneBook', this.$route.params.isbn)
    this.$store.dispatch('fetchComments', this.$route.params.isbn)
    this.$store.dispatch('fetchWishLikeAmount', this.$route.params.isbn)
    // console.log(this.$store.state.liked, 'di created')
  }
}
</script>

<style>

</style>