<template>
<section class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-4">
        <div class="shadow-lg p-5 mb-5 bg-white rounded">
          <div class="mb-5">
            <img src="../assets/register.svg" alt="music" class="img-fluid">
          </div>
          <h5 class="mb-4"><b>Sign Up</b></h5>
          <form>
            <div class="form-group">
              <input
              v-model="email"
              type="email" class="form-control" id="register-email" placeholder="Your email">
            </div>
            <div class="form-group">
              <input
              v-model="password"
              type="password" class="form-control" id="register-password" placeholder="Password">
            </div>
            <div class="form-group">
              <input
              v-model="birth_year"
              type="date" class="form-control" id="register-date">
            </div>
            <button
            @click.prevent='register'
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
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      birth_year: null
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password,
        birth_year: this.birth_year
      }
      console.log(payload)
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>

</style>
