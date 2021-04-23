<template>
  <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form @submit.prevent="register" class="row g-3">
                        <h4>Please Sign Up Your Account</h4>
                        <div class="col-12">
                            <label>Email</label>
                            <input type="text" name="email" v-model="userData.email" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password" v-model="userData.password" class="form-control" placeholder="Password">
                        </div>
                        <div class="col-12">
                            <label>Role</label>
                            <select v-model="userData.role" class="form-select" aria-label="Default select example">
                            <option selected>Please select your role</option>
                            <option value="Surgeons">Surgeons</option>
                            <option value="Primary care">Primary Care</option>
                              <option value="Intensive care">Intensive Care</option>
                        </select>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary float-center">Sign Up</button>
                        </div>
                    </form>
                    <hr class="mt-4">
                    <div class="col-12">
                        <p class="text-center mb-0">Already have an account? please sign in <a href="#" @click.prevent="toLoginPage">here</a></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
              <div class="container d-flex justify-content-center" v-for="weather in weathers" :key="weather.id" :weather="weather" >
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
  name: 'Register',
  data () {
    return {
      userData: {
        email: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.userData)
    },
    toLoginPage () {
      this.$store.dispatch('toLoginPage')
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
.container {
  margin: 30px auto;
}
</style>
