<template>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-2xl mr-5 mb-5">
        <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="`https://image.tmdb.org/t/p/w500/${result.poster_path}`">
        </a>
        <div class="mt-4 -ml-10">
            <h2 class="title-font font-medium text-center text-2xl">{{ result.title }}</h2>
            <div class="ml-20 mt-2">
            <span class="text-2xl text-grey-darker  px-2 -ml-2">
                ⭐️ {{ result.vote_average }}
            </span>
            <span class="text-center px-3 text-2xl">🎬 {{ result.release_date }}</span>
            </div>
            <div class="ml-24 px-6 py-4">
                <a
                @click.prevent="getIdPopular(result.id)" class="ml-16" href="#"><i class="fas text-4xl fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailCards',
  props: ['result'],
  methods: {
    getIdPopular (id) {
    //   console.log(id, 'INI TOMBOLNYA')
      this.$store.dispatch('getDetailPopular', { id })
    }
  }
}
</script>

<style>

</style>
