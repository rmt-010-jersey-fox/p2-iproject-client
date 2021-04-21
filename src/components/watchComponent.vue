<template>
  <div class="card m-2 text-white bg-dark" style="width: 18rem;">
        <img :src="w.poster" class="card-img-top mt-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{w.title}}</h5>
        </div>
          <button @click.prevent="removeWatch(w.id)" class="btn btn-danger mb-3">Remove</button>
          <router-link class="btn btn-primary mb-3" :to="{name: 'Details', params:{ imdbID: w.MovieId}}">Details</router-link>
      </div>
</template>

<script>
export default {
  name: 'WatchComponent',
  props: ['w'],
  methods: {
    removeWatch (id) {
      this.$store.dispatch('removeWatch', id)
    }
  }
}
</script>

<style>

</style>
