<template>
  <div id="deck-page" class="page form-page">

    <h2>{{ deck.name }}</h2>
    <hr>
    <ul>
      <a href=""><li>Edit Name</li></a>
      <router-link :to="{ name: 'DeckCardlist', params: { id: deck.id } }"><li>Browse</li></router-link>
      <a class="delete-option" href=""><li>Delete This Deck</li></a>
    </ul>
    <div class="detail-deck">
      <h3>Total Cards</h3>
      <h3>{{ cardsTotal }}</h3>
    </div>
    <div class="detail-deck">
      <h3>Cards to Clear</h3>
      <h3>{{ cardsToClear }}</h3>
    </div>

    <button @click.prevent="study()" :disabled="cardsToclear === 0" class = "button-pair">Start!</button>
    <router-link :to="{ name: 'Home' }"><button class = "button-pair">Cancel</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'DeckDetail',

  created () {
    this.$store.dispatch('getDeck')
  },

  methods: {
    study () {
      this.$router.push({ name: 'StudyDeck', params: { id: this.$route.params.id } })
    }
  },

  computed: {
    deck () {
      return this.$store.state.deck
    },

    cardsTotal () {
      return this.$store.state.cards.length
    },

    cardsToClear () {
      const todayDate = new Date()
      const tomorrowDate = new Date(todayDate.setDate(todayDate.getDate() + 1)).toLocaleDateString('en-CA')

      return this.$store.state.cards.filter(card => new Date(card.due) < new Date(tomorrowDate)).length
    }
  }
}
</script>

<style>

</style>
