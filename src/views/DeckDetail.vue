<template>
  <div id="deck-page" class="page form-page">

    <h2>Deck 1</h2>
    <hr>
    <ul>
      <a href=""><li>Edit Name</li></a>
      <router-link :to="{ name: 'DeckCardlist', params: { id: 1 } }"><li>Browse</li></router-link>
      <a class="delete-option" href=""><li>Delete This Deck</li></a>
    </ul>
    <div class="detail-deck">
      <h3>Total Cards</h3>
      <h3>40</h3>
    </div>
    <div class="detail-deck">
      <h3>Cards to Clear</h3>
      <h3>23</h3>
    </div>

    <router-link :to="{ name: 'StudyDeck', params: { id: 1 } }"><button class = "button-pair">Start!</button></router-link>
    <button class = "button-pair">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'DeckDetail'
}
</script>

<style>

</style>
