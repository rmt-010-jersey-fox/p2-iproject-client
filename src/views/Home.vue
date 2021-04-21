<template>
  <div>
    <h1>Welcome to Tournament Generator</h1>
    <h2>The place you can easly make one</h2>
    <h3>Click one card below to see ongoing tournament now!!</h3>
    <div class="row">
      <div class="card bg-secondary" style="width: 18rem; margin-left:1em;" v-for="Tournament in Tournaments" :key="Tournament.id">
        <img width="100%" height="300px" style="padding-top:1em; border-radius:25px" :src="getimg(Tournament.game)" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{ Tournament.name }}</h5>
          <p class="card-text">{{ Tournament.description }}</p>
        </div>
          <a href="#" @click.prevent="changepage(Tournament.id)" style="margin: 1em" class="btn btn-primary">View Tournament</a>
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
      } else if (game === 'DOTA2') {
        return 'https://pbs.twimg.com/profile_images/1148484652358746112/UdJALHjZ_400x400.png'
      } else if (game === 'PUBG') {
        return 'https://i.pinimg.com/236x/c1/0e/f5/c10ef55557db27b0cb3562687205e87d.jpg?b=t'
      } else if (game === 'APEX') {
        return 'https://i.pinimg.com/originals/0f/80/f1/0f80f1bcbec5db912c752484292ad318.png'
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

p,h5 {
  color: black
}
</style>