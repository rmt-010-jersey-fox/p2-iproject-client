<template>
  <div class="register">
    <Navbar />
    <section>
      <div class="container">
        <div class="row">
          <div class="col-6" id="logo">
          </div>
          <div class="col-6" id="form-register">
            <div class="register-title text-center pt-3">
              <h2>Register Here</h2>
            </div>
            <form @submit.prevent="register">
              <div class="form-group">
              <label for="name-register">Name :</label>
              <input v-model="name" type="text" class="form-control" id="name-register" aria-describedby="emailHelp">
              </div>
              <div class="form-group">
              <label for="email-register">Email :</label>
              <input v-model="email" type="text" class="form-control" id="email-register" aria-describedby="emailHelp">
              </div>
              <div class="form-group">
              <label for="password-register">Password :</label>
              <input v-model="password" type="password" class="form-control" id="password-register">
              </div><br>
              <button type="submit" class="btn btn-secondary">submit</button>
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
  name: 'Register',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
