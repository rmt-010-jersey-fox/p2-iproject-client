<template>
  <div class="section">
    <CarouselGame />
    <!--? Content -->
    <section>
      <div class="container-fluid mt-4">
        <div class="col d-flex flex-row flex-wrap justify-content-center" >
          <GameCard
            class="zoom"
            v-for="game in games.data"
            :key="game.id"
            :game="game"/>
          <!-- Card -->
          <!-- <div class="card bg-dark text-white game-card">
            <img src="../assets/remnant_from_the_ashes_game-wallpaper-1920x1080.jpg" class="card-img" alt="..."> -->
            <!-- <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div> -->
            <!-- <div>
              <h6 style="text-align: center;">Game Title</h6>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselGame from '../components/CarouselGame'
import GameCard from '../components/GameCard'

export default {
  name: 'Home',
  beforeCreate () {
    this.$store.dispatch('fecthGames')
  },
  components: {
    CarouselGame,
    GameCard
  },
  computed: {
    games () {
      return this.$store.state.games
    }
  }
}
</script>

<style scoped>
  .game-card {
    width: calc(15% - 20px);
    display: inline-block;
    margin: 0 10px 20px;
    position: relative;
    border-radius: 20px;
    border-color: transparent;
    vertical-align: top;
  }

  .card-img {
    max-height: 13.2em;
  }

  .zoom {
    transition: transform .2s; /* Animation */
  }

  .zoom:hover {
    transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>
