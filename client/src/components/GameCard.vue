<template>
  <div class="card bg-dark text-white game-card">
    <div v-if="game.cover">
      <img :src="game.cover.url.replace('t_thumb', 't_cover_big')" class="card-img" :alt="game.id">
    </div>
    <div v-else>
      <img src="../assets/NO_picture.jpg" class="card-img" alt="defaultImage">
    </div>
    <!-- <div class="card-img-overlay">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text">Last updated 3 mins ago</p>
    </div> -->
    <div>
      <h6 style="text-align: center;">{{ game.name }}</h6>
    </div>
  </div>
<!-- replace('t_thumb', 't_cover_big') -->
</template>

<script>
export default {
  name: 'GameCard',
  props: ['game']
}
</script>

<style scoped>
  .card {
    border: 0px solid rgba(0,0,0,.125);
  }
</style>
