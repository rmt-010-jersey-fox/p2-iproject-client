<template>
  <div class="home">
    <div class="container" style="min-height: 100vh">
      <div style="height: 4.5rem"/>
      <h3 class="title is-3 pt-5 pl-5 has-text-white" style="text-align: center">List Anime</h3>
      <div class="pl-5">
        <AnimeSec v-for= "anime in listAnime" :key= "anime.id" :list= "anime"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AnimeSec from '../components/listAnime'

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('fetchAnime')
  },
  components: {
    AnimeSec
  },
  computed: {
    ...mapState({
      listAnime: 'listAnime'
    })
  }
}
</script>
