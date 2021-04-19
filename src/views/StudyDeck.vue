<template>
  <div id="study-deck-page" class="page form-page">
    <i class="fa fa-arrow-left fa-2x"></i>
    <div id="card-problem">
      <p id="card-front">面白い</p>
      <hr>
      <p id="card-back">(omo-shiro-i) Menarik ( hanya tampil setelah show answer ditekan ), tombol show answer akan tergantikan oleh 3 tombol dibawahnya saat ditekan</p>
    </div>

    <div id="show-after-answer">
      <button class="standalone-button">Show Answer</button> <br>
      <button class="button-trio">Again</button>
      <button class="button-trio">Hard</button>
      <button class="button-trio">Good</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyDeck'
}
</script>

<style>

</style>
