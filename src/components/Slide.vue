<template>
    <splide :options="options" class="w-full">
        <splide-slide class="flex justify-between">
            <img @click="info(book)" v-for="(book, i) in books.slice(0, 5)" :key="i" class="h-48 rounded-lg cursor-pointer" :src="book.book_image">
        </splide-slide>
        <splide-slide class="flex justify-between">
            <img @click="info(book)" v-for="(book, i) in books.slice(5, 10)" :key="i" class="h-48 rounded-lg cursor-pointer" :src="book.book_image">
        </splide-slide>
        <splide-slide class="flex justify-between">
            <img @click="info(book)" v-for="(book, i) in books.slice(10, 15)" :key="i" class="h-48 rounded-lg cursor-pointer" :src="book.book_image">
        </splide-slide>
    </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
export default {
  components: {
    Splide,
    SplideSlide,
  },
    data () {
        return {
            options: {
                type : 'loop',
                autoplay: true,
                interval: 3000,
                arrows: false
            }
        }
    },
    created () {
        this.$store.dispatch('getRecommendations')
    },
    computed: {
        books () {
            return this.$store.state.booksRecommend
        }
    },
    methods: {
        info (detail) {
            this.$store.dispatch('getRecommendDetail', { preview: detail.book_image, title: detail.title, author: detail.author, description: detail.description, publisher: detail.publisher })
            this.$nextTick(() => {
                this.$router.push({ name: 'Detail' }).catch(() => {})
            })
        }
    }
}
</script>

<style>

</style>