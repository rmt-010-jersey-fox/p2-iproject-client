<template>
  <div class="modal fade" id="editBookModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content rounded-2xl overflow-hidden dark:bg-gray-600">
      <div class="modal-header">
        <p class="font-semibold modal-title dark:text-gray-300">Edit Book Detail</p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Title</label>
                        <input v-model="bookDetail.title" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Image URL</label>
                        <input v-model="bookDetail.preview" placeholder="e.g https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Author</label>
                        <input v-model="bookDetail.author" type="text" placeholder="e.g J.K Rowling" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Release Year</label>
                        <input v-model="bookDetail.released_year" type="number" min="0" placeholder="e.g 2007" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>
                    <div class="col-span-2">
                        <label class="text-gray-700 dark:text-gray-200">Description</label>
                        <textarea v-model="bookDetail.description" placeholder="Following Dumbledore's death, Voldemort is attempting to take control of the Ministry of Magic. Meanwhile, Harry is about to turn seventeen, and lose the protection from his mother." class="resize-none block h-32 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
                    </div>
                </div>
      </div>
      <div class="flex p-3 gap-x-2">
          <button class="w-1/2 px-1 py-2 font-semibold text-red-500 rounded-lg focus:outline-none" data-bs-dismiss="modal">Cancel</button>
          <button @click="editBook" class="w-1/2 px-1 py-2 bg-purple-100 dark:bg-gray-300 font-semibold text-purple-500 dark:text-gray-600 rounded-lg focus:outline-none" data-bs-dismiss="modal">Edit</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'EditBookModal',
    methods: {
      editBook () {
        this.$store.dispatch('editBook', { id: this.bookDetail.id, bookData : { title: this.bookDetail.title, author: this.bookDetail.author, released_year: this.bookDetail.released_year, preview: this.bookDetail.preview, description: this.bookDetail.description } })
      }
    },
    computed: {
      bookDetail () {
        return this.$store.state.bookDetail
      }
    }
}
</script>

<style>

</style>