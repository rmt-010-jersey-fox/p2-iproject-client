<template>
    <div class="h-full w-3/4 px-2 py-3">
        <div class="h-full p-7">
        <!-- <div class="h-full p-7"> -->
            <div class="flex justify-between items-center mb-8 select-none">
                <p class="font-extrabold text-5xl text-gray-700">My Library</p>
                <div class="bg-purple-100 transform duration-500 p-3 rounded-lg cursor-pointer ring-2 ring-purple-500 ring-opacity-0 active:ring-opacity-50 focus:outline-none">
                    <p class="font-semibold text-purple-500">Add New Book</p>
                </div>
            </div>
            <div v-if="library.length" class="w-full h-5/6 flex-col overflow-auto gap-y-5">
            <div>
                <LibraryBookCard v-for="book in library" :key="book.id" :book="book" ></LibraryBookCard>
            </div>
            </div>
            <div v-else class="h-5/6">
                <img class="h-full mx-auto opacity-50" src="@/assets/library-illustration.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import LibraryBookCard from './LibraryBookCard'
export default {
    name: 'Library',
    components: {
        LibraryBookCard
    },
    created () {
        return this.$store.dispatch('getLibrary')
    },
    computed: {
        library () {
            return this.$store.state.library
        }
    }
}
</script>

<style>

</style>