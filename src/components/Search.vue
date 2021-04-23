<template>
    <div class="h-full w-3/4 px-2 py-3 overflow-hidden select-none">
        <div class="h-full p-7">
          <div class="flex justify-between items-end mb-8">
              <p class="font-extrabold text-5xl text-gray-700 dark:text-gray-400">Find a Book</p>
              <div class="flex items-center gap-2">
                <input @keyup.enter="search" v-model="searchInput" type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Find Books"/>
                <div @click="listen" class="bg-gradient-to-br from-fuchsia-500 to-purple-600 h-auto p-2 rounded-full text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </div>
              </div>
          </div>
          <div v-if="listening" class="absolute left-3/4">
            <p class="text-3xl font-bold animate-pulse text-purple-300">Listening . . .</p>
          </div>
          <div v-if="booksResult.length" class="overflow-auto h-full">
            <div>
              <p class="font-semibold text-2xl text-gray-700 dark:text-gray-400">Search Results for: {{this.searchFor}}</p>
            </div>
            <div class="w-full h-5/6 grid grid-cols-3 overflow-auto">
                <SearchBookCard v-for="(book, i) in booksResult" :key="i" :book="book" ></SearchBookCard>
            </div>
          </div>
          <div v-else class="opacity-50">
            <img src="@/assets/search-illustration.png" alt="">
          </div>
        </div>
    </div>
</template>

<script>
import SearchBookCard from '../components/SearchBookCard'
import Swal from 'sweetalert2'
export default {
  name: 'Search',
  components: {
    SearchBookCard
  },
  data () {
    return {
      searchInput: '',
      booksResult: [],
      searchFor: '',
      recognition: false,
      listening: false
    }
  },
  methods: {
    search () {
      this.$store.dispatch('findBooks', { userSearch: this.searchInput })
        .then(({ data }) => {
          this.searchFor = this.searchInput
          this.booksResult = data
        })
    },
    listen () {
      if (!this.recognition) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Your browser doesn't support voice recognition feature, try to use Google Chrome instead",
        })
      } else {
        if (this.listening) {
          this.recognition.stop()
          this.listening = false
        } else {
          this.listening = true
          this.recognition.lang = 'id-ID'
          this.recognition.start()
          this.recognition.onresult = (e) => {
            if (e.results[0][0].transcript.toLowerCase() === 'sarankan aku buku' || e.results[0][0].transcript.toLowerCase() === 'sarankan buku') {
              this.$router.push({ name: 'Recommendation' })
            } else {
              this.searchInput = e.results[0][0].transcript
              this.search()
            }
          }
          this.recognition.onend = () => {
              this.listening = false
          }
        }
      }
    }
  },
  created () {
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition()
    }
  }
}
</script>

<style>

</style>