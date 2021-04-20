<template>
  <div id="main-page" class="page">
    <h2>My Decks Collection</h2>
    <ul>
      <router-link :to="{ name: 'DeckAdd'}"><li>Create a New Deck</li></router-link>
      <router-link :to="{ name: 'CardAdd'}"><li>Add a New Card</li></router-link>
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
        <td><router-link :to="{ name: 'DeckDetail', params: { id: deck.id }}">{{ deck.name }}</router-link></td>
        <td>{{ deck.Cards.length }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Home',

  created () {
    this.$store.dispatch('getUserDecks')
  },

  computed: {
    decks () {
      return this.$store.state.decks
    }
  }
}
</script>
