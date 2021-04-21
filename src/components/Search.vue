<template>
    <div class="h-full w-3/4 px-2 py-3 overflow-hidden">
        <div class="h-full p-7">
          <div class="flex justify-between items-end mb-8">
              <p class="font-extrabold text-5xl text-gray-700">Find a Book</p>
              <div class="flex items-center gap-2">
                <input @keyup.enter="search" v-model="searchInput" type="text" class="rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Find Books"/>
                <div class="bg-gradient-to-br from-fuchsia-500 to-purple-600 h-auto p-2 rounded-full text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </div>
              </div>
          </div>
          <div v-if="booksResult.length" class="overflow-auto h-full">
            <div>
              <p class="font-semibold text-2xl text-gray-700">Search Results for: {{this.searchInput}}</p>
            </div>
            <div class="w-full h-5/6 grid grid-cols-3 overflow-auto">
                <SearchBookCard v-for="book in booksResult" :key="book.id" :book="book" ></SearchBookCard>
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
export default {
  name: 'Search',
  components: {
    SearchBookCard
  },
  data () {
    return {
      searchInput: '',
      booksResult: []
    }
  },
  methods: {
    search () {
      this.$store.dispatch('findBooks', { userSearch: this.searchInput })
        .then(({ data }) => {
          this.booksResult = data
        })
    }
  }
}
</script>

<style>

</style>