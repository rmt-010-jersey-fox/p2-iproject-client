<template>
  <div class="container">
    <h1 class="text-dark text-center" style="margin-top: 14vh">Bank Sampah</h1>
    <form id="login">
      <div class="card justify-content mx-auto mt-5 p-3" style="width: 30vw">
        <h2 class="text-dark" style="text-align: center;">Login</h2>
        <div class="form-floating mb-3">
          <input type="email" v-model="email" class="form-control" id="InputEmail" placeholder="example@mail.com" aria-describedby="emailHelp">
          <label for="InputEmail" class="">Email address</label>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="form-floating mb-3">
          <input type="password" v-model="password" class="form-control" placeholder="password" id="InputPassword">
          <label for="InputPassword" class="">Password</label>
        </div>
        <button type="submit" @click.prevent="login" class="btn my-2 btn-primary">Login</button>
        <GoogleLogin :params="params" class="mx-auto my-2" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
        <p>Don't have an account yet? <router-link to="/register">Register</router-link></p>
      </div>
    </form>
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
        client_id: '1063244199097-ngvat44cl0qedpdsjiuj389oil6d69rq.apps.googleusercontent.com'
      },
      renderParams: {
        longtitle: false
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    login () {
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
      this.email = ''
      this.password = ''
    },
    onSuccess (googleUser) {
      const idToken = googleUser.getAuthResponse().id_token
      this.$store.dispatch('googleLogin', { idToken })
    },
    onFailure (googleUser) {
      console.log(googleUser)
    }
  }
}
</script>
