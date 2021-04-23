<template>
  <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form @submit.prevent="login" class="row g-3">
                        <h4>Please Sign In Your Account</h4>
                        <div class="col-12">
                            <label>Email</label>
                            <input type="text" name="email" v-model="userData.email" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password" v-model="userData.password" class="form-control" placeholder="Password">
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary float-center">Sign In</button>
                        </div>
                    </form>
                    <hr class="mt-4">
                    <div class="col-12">
                        <p class="text-center mb-0">Have not account yet? please signup <a href="#" @click.prevent="toRegisterPage">here</a></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
              <div class="container" v-for="weather in weathers" :key="weather.id" :weather="weather" >
              <div class="card align-items-center" id="weather">
                <div class="card-image">
                  <img
                    :src="weather.weatherIcons"
                  />
                </div>
                <div class="card-body">
                  <h6>Location: {{ weather.location }}</h6>
                  <h6>Time: {{ weather.time }}</h6>
                  <h6>Description: {{ weather.weatherDescriptions }}</h6>
                  <h6>Temperature: {{ weather.temperature }}</h6>
                </div>
              </div>
          </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      userData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.userData)
    },
    toRegisterPage () {
      this.$store.dispatch('toRegisterPage')
    },
    getWeatherData () {
      this.$store.dispatch('getWeatherData')
    }
  },
  created () {
    this.$store.dispatch('getWeatherData')
  },
  computed: {
    weathers () {
      return this.$store.state.weathers
    }
  }
}
</script>

<style>
#weather {
  display: flex;
  width: 400px;
  padding: 30px;
  margin: 10px auto;
}
.container {
  margin: 30px auto;
}
</style>
