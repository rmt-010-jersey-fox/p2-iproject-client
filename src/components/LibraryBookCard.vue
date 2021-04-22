<template>
    <div class="flex group items-center select-none">
        <div class="w-1/5 h-52 bg-purple-300 dark:bg-gray-500 p-2 rounded-lg flex items-center">
            <img class="transform w-full duration-700 rounded-lg shadow-lg" :src="book.preview" alt="">
        </div>
        <div class="border-2 bg-purple-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 bg-opacity-50 shadow-lg h-48 w-full m-3 rounded-lg p-3 relative">
                <div class="flex absolute right-5 gap-x-3 opacity-0 group-hover:opacity-100 tranform duration-500 ">
                    <svg @click="bookDetail" data-bs-toggle="modal" data-bs-target="#editBookModal" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 opacity-50 hover:opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    <svg @click="deleteBook" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 opacity-50 hover:opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </div>
            <p class="text-center text-lg font-semibold">{{book.title}}</p>
            <p class="text-center"><span class="italic">{{book.author}}</span> | {{book.released_year}}</p>
            <div class="h-28 overflow-auto px-7 py-3">
                <p class="select-text">{{book.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'LibraryBookCard',
    props: ['book'],
    methods: {
        deleteBook () {
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete'
        }).then((result) => {
        if (result.isConfirmed) {
            this.$store.dispatch('deleteBook', { id: this.book.id })
            }
          })
        },
        bookDetail () {
            this.$store.dispatch('getBookDetail', { id: this.book.id })
        }
    }
}
</script>

<style>

</style>