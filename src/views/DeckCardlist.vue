<template>
  <div id="deck-cardlist-page" class="page">
    <h2>Deck 1 Cards</h2>
    <input id="card-search" type="text" placeholder="Search a card in this deck">
    <button><i class="fa fa-search"></i></button>
    <br><br>

    <table id="deck-table">
      <tr>
        <th>Front</th>
        <th>Back</th>
      </tr>
      <tr @click="toCardDetail(1)" class="card-row">
        <td>元気</td>
        <td>(gen-ki) Baik, sehat</td>
      </tr>
      <tr @click="toCardDetail(1)" class="card-row">
        <td>私</td>
        <td>(watashi) Saya, aku</td>
      </tr>
      <tr @click="toCardDetail(1)" class="card-row">
        <td>面白い</td>
        <td>(omo-shiro-i) Menarik</td>
      </tr>
      <tr @click="toCardDetail(1)" class="card-row">
        <td>楽しい</td>
        <td>(tano-shii) Menyenangkan</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DeckCardList',
  methods: {
    toCardDetail (id) {
      this.$router.push({ name: 'CardEdit', params: { id } })
    }
  }
}
</script>

<style>

</style>
