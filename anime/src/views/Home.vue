<template>
  <div class="home">
    <div class="container" style="min-height: 100vh">
      <div style="height: 4.5rem"/>
      <h3 class="title is-3 pt-5 pl-5 has-text-white" style="text-align: center">List Anime</h3>
      <div class="container is-flex is-justify-content-center is-align-items-center" style="height: 100vh" v-if="listAnime.length === 0">
          <lottie-player src="https://assets1.lottiefiles.com/animated_stickers/lf_tgs_j7miwfxd.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop autoplay/>
          <p class="subtitle is-2">Sorry Anime still empty! Go Add something anime!</p>
        </div>
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
