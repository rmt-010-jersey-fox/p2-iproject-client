<template>
  <form>
    <label for="deck-to-add">Select a Deck:</label><br><br>
    <select id="deck-to-add">
      <option>Deck 1</option>
      <option>Deck 2</option>>
    </select>
    <br><br>

    <label for="front-add">Front:</label><br>
    <div id="front-add" class="textarea" contenteditable="true"></div>
    <br><br>

    <label for="back-add">Back:</label><br>
    <div id="back-add" class="textarea" contenteditable="true"></div>
    <br><br>

    <input class = "button-pair" type="submit" value="Submit">
    <button class = "button-pair">Cancel</button>
  </form>
</template>

<script>
export default {
  name: 'CardForm'
}
</script>

<style>

</style>
