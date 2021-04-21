<template>
  <div id="main-page" class="page">
    <h2>My Decks Collection</h2>
    <ul>
      <a href="#" data-bs-toggle="modal" data-bs-target="#deckformmodal"><li>Create a New Deck</li></a>
    </ul>
    <table id="collection-table">
      <tr>
        <th>Name</th>
        <th>Total Cards</th>
      </tr>
      <tr
        v-for="deck in decks"
        :key="deck.id"
      >
        <td><router-link class="link-dark" :to="{ name: 'DeckDetail', params: { id: deck.id }}">{{ deck.name }}</router-link></td>
        <td>{{ deck.Cards.length }}</td>
      </tr>
    </table>
    <DeckForm
      @submitAction="createDeck"
    />
  </div>
</template>

<script>
import DeckForm from '../components/DeckFormModal'

export default {
  name: 'Home',

  created () {
    this.$store.dispatch('getUserDecks')
  },

  computed: {
    decks () {
      return this.$store.state.decks
    }
  },

  components: { DeckForm },

  methods: {
    createDeck (name) {
      this.$store.dispatch('createDeck', { name })
    }
  }
}
</script>

<style scoped>
  h2 {
    font-size: 1.9em;
    font-weight: bolder;
  }
</style>
