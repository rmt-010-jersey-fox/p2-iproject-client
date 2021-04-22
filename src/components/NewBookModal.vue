<template>
  <div class="modal fade" id="newBookModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content rounded-2xl overflow-hidden dark:bg-gray-600">
      <div class="modal-header">
        <p class="font-semibold modal-title dark:text-gray-300">Add New Book</p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Title</label>
                        <input v-model="bookTitle" type="text" placeholder="e.g Harry Potter and the Deathly Hallows" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Image URL</label>
                        <input v-model="bookPreview" placeholder="e.g https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Author</label>
                        <input v-model="bookAuthor" type="text" placeholder="e.g J.K Rowling" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200">Release Year</label>
                        <input v-model="bookReleasedYear" type="number" min="0" placeholder="e.g 2007" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    </div>
                    <div class="col-span-2">
                        <label class="text-gray-700 dark:text-gray-200">Description</label>
                        <textarea v-model="bookDescription" placeholder="Following Dumbledore's death, Voldemort is attempting to take control of the Ministry of Magic. Meanwhile, Harry is about to turn seventeen, and lose the protection from his mother." class="resize-none block h-32 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
                    </div>
                </div>
      </div>
      <div class="flex p-3 gap-x-2">
          <button @click="clearForm" class="w-1/2 px-1 py-2 font-semibold text-red-500 rounded-lg focus:outline-none" data-bs-dismiss="modal">Cancel</button>
          <button @click="newBook" class="w-1/2 px-1 py-2 bg-purple-100 dark:bg-gray-300 font-semibold text-purple-500 dark:text-gray-600 rounded-lg focus:outline-none" data-bs-dismiss="modal">Add</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'NewBookModal',
    data () {
      return {
        bookTitle: '',
        bookAuthor: '',
        bookReleasedYear: '',
        bookPreview: '',
        bookDescription: ''
      }
    },
    methods: {
      newBook () {
        this.$store.dispatch('addToLibrary', { bookData : { title: this.bookTitle, author: this.bookAuthor, released_year: this.bookReleasedYear, preview: this.bookPreview, description: this.bookDescription } })
        this.clearForm()
      },
      clearForm () {
        this.bookTitle = '',
        this.bookAuthor = '',
        this.bookReleasedYear = '',
        this.bookPreview = '',
        this.bookDescription = ''
      }
    }
}
</script>

<style>

</style>