<template>
  <div id="deck-cardlist-page" class="page">
    <h2>{{ deckName }} Cards</h2>
    <div id="search-container">
      <input id="card-search" type="text" placeholder="Search a card in this deck">
      <button><i class="fa fa-search"></i></button>
    </div>
    <br><br>
    <div class="table-container">
      <table id="deck-table">
        <tr>
          <th>Front</th>
          <th>Back</th>
          <th>Due</th>
        </tr>
        <tr
          v-for="card in cards"
          :key="card.id"
          @click="toCardDetail(card.id)"
          class="card-row">
          <td>{{ card.front }}</td>
          <td>{{ card.back }}</td>
          <td>{{ card.due }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeckCardList',

  created () {
    this.$store.dispatch('getDeck')
  },

  computed: {
    deckName () {
      return this.$store.state.deck.name
    },

    cards () {
      return this.$store.state.cards
    }
  },

  methods: {
    toCardDetail (id) {
      this.$router.push({ name: 'CardEdit', params: { id } })
    }
  }
}
</script>

<style scoped>
  table {
    min-width: 700px;
  }

  .table-container {
    overflow: auto;
  }

</style>
