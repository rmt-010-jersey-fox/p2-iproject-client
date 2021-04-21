<template>
  <div class="container-sm wish">
    <div class="row mt-5 mb-5">
      <h1>WISHLIST</h1>
    </div>
    <div class="row">
      <!-- Wishlist Card -->
      <div class="flip-card game-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img class="auto-crop" src="../assets/halo_infinite_video_game_2020-wallpaper-1920x1080.jpg" alt="Avatar">
          </div>
          <div class="flip-card-back">
            <h5 class="mt-5">John Doe</h5>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wishlist'
}
</script>

<style scoped>
  .auto-crop {
    width: 12.3em;
    height: 250px;
    object-position: center;
    object-fit:fill;
    border-radius: 15px;
  }
  .game-card {
    width: calc(15% - 20px);
    display: inline-block;
    margin: 0 10px 20px;
    position: relative;
    border-radius: 20px;
    border-color: transparent;
    vertical-align: top;
  }
  .wish {
    width: auto;
    margin-top: 3em;
    height: 35em;
    border-radius: 1em;
  }

  .flip-card {
    background-color: transparent;
    width: 12.3em;
    height: 250px;
    /* border: 1px solid #f1f1f1; */
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    border-radius: 1em;
    transform: rotateY(180deg);
  }
</style>
