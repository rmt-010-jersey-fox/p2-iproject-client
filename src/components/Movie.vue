<template>
  <div class="col-md-4 mb-3">
    <div class="card text-white bg-dark">
      <img :src='movie.Poster' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{movie.Title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{movie.Year}}</h6>
          <router-link class="btn btn-primary" :to="{name: 'Details', params:{ imdbID: movie.imdbID}}">Details</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie']
}
</script>

<style>

</style>
