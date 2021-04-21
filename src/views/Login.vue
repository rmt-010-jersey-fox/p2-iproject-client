<template>
      <!-- Login -->
    <div id="form-login">
      <div class="container mt-5 md-5">
        <div class="row align-items-center">
          <div class="col-md-8 text-center">
            <div class="container">
              <img src="../assets/5131730.jpg" alt="" style="height: 400px;">
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-light border-radius shadow" style="height: 450px;">
              <div class="card-body">
                <form @submit.prevent="login" id="login">
                  <center>
                    <h3
                      class="mb-3 mt-3"
                      style="font-weight: bold; color: #3e9ca5"
                    >
                      Login User
                    </h3>
                    <hr style="border: 1px solid black" />
                  </center>
                  <div class="mb-3">
                    <label for="email" class="form-label"
                      >Email address:</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password"
                      required
                    />
                  </div>
                  <div class="row">
                    <div class="col d-grid gap-2">
                      <button type="submit" class="btn btn-primer">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
                <div class="row mt-2 mb-1">
                <div class="col-3">
                  <p>Or with :</p>
                </div>
                <div class="col-9">
                  <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess">Login</GoogleLogin>
                </div>
              </div>
                <div>
                  <p>Don't Have Any Account ? <a href="#form-register" @click.prevent='toRegister'>Register</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import GoogleLogin from 'vue-google-login'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      params: {
        client_id:
          '270568207489-gs7fp6fr519vlco6uphfgs8opv6of32r.apps.googleusercontent.com'
      },
      renderParams: {
        width: 200,
        height: 40,
        longtitle: true
      }
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register').catch(() => {})
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    },
    onSuccess (googleUser) {
      console.log(googleUser)
      console.log(googleUser.getBasicProfile())
      const id_token = googleUser.getAuthResponse().id_token
      console.log({ id_token }, '<<<<<<<<<<<< Ini Token dari gugel')
      this.$store.dispatch('googleLogin', { id_token })
    }
  },
  components: {
    GoogleLogin
  }
}
</script>

<style>

</style>
