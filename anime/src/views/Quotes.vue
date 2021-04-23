<template>
  <div class="quotes">
    <div class="container" style="min-height: 100vh">
      <div style="height: 4.5rem" />
      <h3
        class="title is-3 pt-5 pl-5 has-text-white"
        style="text-align: center"
      >
        Quotes Anime
      </h3>
      <div class="pl-5">
        <quotes v-for="quote in quotes" :key="quote.id" :list="quote" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import quotes from '../components/quotesCard'

export default {
  name: 'Quotes',
  created () {
    this.$store.dispatch('quotesAnime')
  },
  components: {
    quotes
  },
  computed: {
    ...mapState({
      quotes: 'quotes'
    })
  }
}
</script>

<style></style>
