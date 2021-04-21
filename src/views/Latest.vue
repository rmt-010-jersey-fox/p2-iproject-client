<template>
  <div class="container-fluid row">
    <LatestMovie v-for="lat in latest" :key="lat.id" :lat="lat"  />

  </div>
</template>

<script>
import LatestMovie from '../components/LatestMovie'
import { mapState } from 'vuex'
export default {
  name: 'Latest',
  components: {
    LatestMovie
  },
  computed: {
    ...mapState(['latest'])
  },
  created () {
    this.$store.dispatch('latest')
  }
}
</script>

<style></style>
