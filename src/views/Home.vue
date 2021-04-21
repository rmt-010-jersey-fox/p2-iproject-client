<template>
  <div>
    <h1>Welcome to Tournament Generator</h1>
    <h2>The place you can easly make one</h2>
    <h3>Click one card below to see ongoing tournament now!!</h3>
    <div class="row">
      <div class="card bg-secondary" style="width: 18rem; margin-left:1em;" v-for="Tournament in Tournaments" :key="Tournament.id">
        <img width="100%" height="300px" style="padding-top:1em; border-radius:10%" :src="getimg(Tournament.game)" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{ Tournament.name }}</h5>
          <p class="card-text">{{ Tournament.description }}</p>
          <a href="#" @click.prevent="changepage(Tournament.id)" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    Tournaments () {
      return this.$store.state.Tournament
    }
  },
  methods: {
    getimg (game) {
      if(game === 'R6') {
        return 'https://pbs.twimg.com/profile_images/772493138355187712/zpOtjgb3_400x400.jpg'
      } else if (game === 'ML') {
        return 'https://www.minews.id/wp-content/uploads/2020/09/Ini-Arti-di-Balik-Logo-Baru-Mobile-Legends-Bang-Bang.jpg'
      }
    },
    changepage(id) {
      this.$router.push(`/ongoing/${id}`)
    }
  }
}
</script>

<style>

h1,h3 {
  color: whitesmoke
}
</style>