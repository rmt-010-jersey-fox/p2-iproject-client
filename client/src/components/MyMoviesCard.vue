<template>
    <div class="col-md-3" style="margin-bottom: 1cm;">
        <h6>{{ movie.title }}</h6>
        <img :src="imageLink+movie.poster_path" height="300px" width="250px"/>
        <div style="background-color: #272727;" class="card">
        </div>
        <button @click.prevent="deleteMovie(movie.id)" type="button" class="btn btn-danger">Delete</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imageLink: 'https://image.tmdb.org/t/p/original/'
        }
    },
    props: ['movie'],
    methods: {
        deleteMovie(id) {
            this.$store.dispatch('deleteMyMovie', id)
        }
    }
}
</script>

<style>
</style>