<template>
    <div>
      <div>
        <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
          <div class="row d-flex justify-content-center px-3">
            <div class="card" style="background-image: url('https://i.imgur.com/dpqZJV5.jpg')">
              <form class="form-inline" @submit.prevent="changeCity">
                <div class="form-group mx-sm-2 mb-2">
                  <input type="text"
                  class="form-control"
                  placeholder="Enter City"
                  style="border-radius: 20px;"
                  v-model="city">
                </div>
                <button type="submit" class="btn btn-outline-info btn-sm">Enter City</button>
              </form>
              <h2 class="ml-auto mr-4 mt-3 mb-0">{{ weather.city }}</h2>
              <p class="ml-auto mr-4 mb-0 med-font">{{ weather.weather }}</p>
              <h1 class="ml-auto mr-4 large-font">{{ weather.temp }} &deg;</h1>
              <p class="time-font mb-0 ml-4 mt-auto">{{ new Date().getHours() + ' : ' + new Date().getMinutes()}} <span class="sm-font">{{ weather.ampm }}</span></p>
              <p class="ml-4 mb-4">{{ new Date().toISOString().split('T')[0] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      city: 'Jakarta'
    }
  },
  computed: {
    ...mapState({
      weather: 'weather'
    })
  },

  methods: {
    changeCity () {
      this.$store.dispatch('getWeather', { city: this.city })
    }
  }

  // created () {
  //   this.$store.dispatch('getWeather', { city: this.city })
  // }
}
// di halaman login pas method login di emit 'loginUser' dari server
// this.$socket.emit('loginUser', this.username)
</script>

<style>
body {
    color: #fff;
    overflow-x: hidden;
    height: 100%;
    background-color: #CFD8DC;
    background-repeat: no-repeat
}

.card {
    background-size: cover;
    width: 600px;
    height: 350px;
    border-radius: 20px !important;
    box-shadow: 0px 8px 16px 4px #9E9E9E;
    margin-top: 50px;
    margin-bottom: 50px;
    color: #fff;
}

.time-font {
    font-size: 50px
}

.sm-font {
    font-size: 18px
}

.med-font {
    font-size: 28px
}

.large-font {
    font-size: 60px
}

form input {
  height: 10px;
}
</style>
