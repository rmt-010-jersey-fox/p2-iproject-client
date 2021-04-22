<template>
    <div class="col-md-3" style="margin-bottom: 1cm;">
        <h6>{{ movie.title }}</h6>
        <img :src="imageLink+movie.poster_path" height="300px" width="250px"/>
        <div style="background-color: #272727;" class="card">
            <p>Released Year: {{ movie.release_date }}</p>
            <p>Overview : {{ movie.overview}}</p>
        </div>
        <button @click.prevent="addMovie()" type="button" class="btn btn-info">Add to my List</button>
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
        addMovie() {
            let newMyMovies = {
                title: this.movie.title,
                poster_path: this.movie.poster_path
            }
            this.$store.dispatch('addToMyMovie', newMyMovies)
        }
    }
}
</script>

<style>
</style>