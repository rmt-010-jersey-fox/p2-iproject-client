<template>
    <div>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Travelers</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
      <div class="row">
        <div class="col-sm">
        <b-button style="margin: 10px"
        @click.prevent="doLogOut"
        size="sm"
        class="my-2 my-sm-0"
        type="button"
        >LOGOUT
        </b-button>
        <b-button
        @click.prevent="loginPage"
        size="sm"
        class="my-2 my-sm-0"
        type="button"
        >LOGIN
        </b-button>
        </div>
      </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
      <div>
        <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
          <div class="row">
            <div class="col-md">
          <TripTodo v-for="trip in userTrip" :key="trip.id"
          trip:trip/>
            </div>
          </div>
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
           <b-button @click="goChat" variant="outline-secondary">Chat With Other Travelers</b-button>
           <b-button @click="goAddPage"  variant="outline-secondary">Or Wanna Save Trip for latter</b-button>
        </div>
      </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import TripTodo from '@/components/TripTodo.vue'

export default {
  name: 'Home',
  components: {
    TripTodo
  },
  data () {
    return {
      city: 'Jakarta'
    }
  },
  computed: {
    ...mapState({
      weather: 'weather',
      userTrip: 'userTrip'
    })
  },

  methods: {
    changeCity () {
      this.$store.dispatch('getWeather', { city: this.city })
    },

    goChat () {
      this.$router.push('/chat-room')
    },

    goAddPage () {
      this.$router.push('/add-page')
    },

    doLogOut () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      this.$router.push('/login')
    }
  },

  created () {
    this.$store.dispatch('showAllTrips')
  },

  loginPage () {
    this.$router.push('/login')
  }

}
</script>

<style>

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
