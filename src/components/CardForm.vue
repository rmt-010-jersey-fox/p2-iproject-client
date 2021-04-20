<template>
  <form>
    <label for="deck-to-add">Select a Deck:</label><br><br>
    <select id="deck-to-add">
      <option v-for="deck in decks" :key="deck.id">{{deck.name}}</option>
    </select>
    <br><br>

    <label for="front-add">Front:</label><br>
    <textarea id="front-add"></textarea>
    <br><br>

    <label for="back-add">Back:</label><br>
    <textarea id="back-add"></textarea>
    <br><br>

    <input class = "button-pair" type="submit" value="Submit">
    <button @click="returnTo()" class = "button-pair">Cancel</button>
  </form>
</template>

<script>
export default {
  name: 'CardForm',

  data () {
    return {
      front: '',
      back: '',
      deck: ''
    }
  },

  methods: {
    returnTo () {
      this.$emit('returnTo')
    }
  },

  props: ['card', 'decks']
}
</script>

<style>

</style>
