<template>
  <div id="edit-page" class="page form-page">
    <h2>Card Edit</h2>
    <a class="delete-option" href="">Delete This Card</a>
    <br><br>
    <CardForm
      :card="card"
      :decks="decks"
      @returnTo="deckBrowse"
    />
  </div>
</template>

<script>
import CardForm from '../components/CardForm'

export default {
  name: 'CardEdit',

  created () {
    this.$store.dispatch('getCard')
    this.$store.dispatch('getUserDecks')
  },

  computed: {
    card () {
      return this.$store.state.card
    },

    decks () {
      return this.$store.state.decks
    }
  },

  methods: {
    deckBrowse () {
      this.$router.push({ name: 'DeckCardlist', params: { id: this.card.DeckId } })
    }
  },

  components: { CardForm }
}
</script>

<style>

</style>
