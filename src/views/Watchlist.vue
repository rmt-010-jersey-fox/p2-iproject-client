<template>
  <div class="container-fluid row">
    <WatchComponent v-for="w in watch" :key="w.id" :w="w"/>
  </div>
</template>

<script>
import WatchComponent from '../components/watchComponent'
import { mapState } from 'vuex'
export default {
  name: 'Watchlist',
  components: {
    WatchComponent
  },
  computed: {
    ...mapState(['watch'])
  },
  created () {
    this.$store.dispatch('fetchWatch')
  }
}
</script>

<style>

</style>
