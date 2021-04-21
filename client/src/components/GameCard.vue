<template>
  <div
    class="card bg-dark text-white game-card"
    data-bs-toggle="tooltip"
    :title="game.name">
      <img v-if="game.cover"
        class="card-img auto-crop" :alt="game.id"
        :src="game.cover.url.replace('t_thumb', 't_cover_big')">
      <img
        class="card-img auto-crop" alt="defaultImage"
        v-else src="../assets/NO_picture.jpg">
    <div class="card-img-overlay">
      <i class="fas fa-heart wishlist"
        style="font-size: 30px;"
        @click="wishlist(game.id)">
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: ['game'],
  methods: {
    wishlist (id) {
      console.log('klick', id)
    }
  }
}
</script>

<style scoped>
  .card {
    border: 0px solid rgba(0,0,0,.125);
  }
  .auto-crop {
    height: 250px;
    object-position: center;
    object-fit:fill;
    border-radius: 15px;
  }
  .wishlist {
    position: absolute;
    z-index: 10;
    top: -8px;
    right: -5px;
    height: 25px;
    width: 25px;
  }
  .wishlist:hover {
    /* colo: #3e8e41; */
    color: rgb(255, 5, 5);
  }
</style>
