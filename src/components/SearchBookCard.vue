<template>
    <div class="w-full p-2 h-72 relative mt-3 select-none">
        <div @click="addToLibrary" class="absolute right-0 dark:bg-gray-800 top-0 bg-purple-100 p-2 rounded-full group bg-opacity-100 hover:shadow-lg transform duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-50 group-hover:opacity-100 stroke-current group-hover:text-purple-600 transform duration-300 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </div>
        <div class="bg-gray-100 dark:bg-gray-800 h-full rounded-xl shadow-lg">
            <div class="h-4/6 overflow-hidden">
                <img class="w-full rounded-t-lg" :src="book.preview" alt="">
            </div>
            <div class="h-2/6 overflow-auto p-2">
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-400">{{book.title}}</p>
                <p class="text-sm italic text-gray-700 dark:text-gray-500">by <span class="font-semibold">{{book.author}}</span> ( {{book.released_year}} ) </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBookCard',
    props: ['book'],
    methods: {
        addToLibrary () {
            let bookData = {
                title: this.book.title,
                author: this.book.author,
                description: this.book.description,
                preview: this.book.preview,
                released_year: this.book.released_year,
            }
            this.$store.dispatch('addToLibrary', { bookData })
        }
    }
}
</script>

<style>

</style>