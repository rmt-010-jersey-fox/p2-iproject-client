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
      <tr>
        <td><router-link :to="{ name: 'DeckDetail', params: { id: 1 }}">Deck 1</router-link></td>
        <td>40</td>
      </tr>
      <tr>
        <td><router-link :to="{ name: 'DeckDetail', params: { id: 2 }}">Deck 2</router-link></td>
        <td>45</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
