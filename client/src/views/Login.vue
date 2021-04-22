<template>
<section class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-4">
        <div class="shadow-lg p-5 mb-5 bg-white rounded">
          <div class="mb-5">
            <img src="../assets/log.svg" alt="music" class="img-fluid">
          </div>
          <button
          @click.prevent="register"
          class="btn btn-outline-primary" id="sign-up-btn">
              Sign up
            </button>
          <h5 class="mb-4"><b>Sign In</b></h5>
          <form>
            <div class="form-group">
              <input
              v-model="email"
              type="email" class="form-control" id="login-email" placeholder="Your email">
            </div>
            <div class="form-group">
              <input
              v-model="password"
              type="password" class="form-control" id="login-password" placeholder="Password">
            </div>
            <button
            @click.prevent='login'
            type="submit" class="btn btn-primary btn-block">Submit</button>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    },
    register () {
      this.$router.push({ name: 'Register' })
    }
  }
}
</script>

<style>

</style>
