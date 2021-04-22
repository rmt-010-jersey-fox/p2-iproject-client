<template>
  <div class="login">
    <Navbar />
      <section>
        <div class="container">
          <div class="row">
            <div class="col-6" id="logo">
            </div>
            <div class="col-6" id="form-login">
              <div class="login-title text-center pt-3">
                <h2>Login Here</h2>
              </div>
              <form @submit.prevent="logIn">
                <div class="form-group">
                <label for="email-login">Email :</label>
                <input v-model="email" type="text" class="form-control" id="email-login" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                <label for="password-login">Password :</label>
                <input v-model="password" type="password" class="form-control" id="password-login">
                </div><br>
                <button type="submit" class="btn btn-secondary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      this.$store.dispatch('logIn', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
