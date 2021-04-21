<template>
    <!-- Register  -->
<div id="form-register">
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-4">
        <div class="card bg-light border-radius shadow" style="height: 400px;">
          <div class="card-body">
            <form @submit.prevent="register" id="register">
              <center>
                <h3 class="mb-3 mt-3" style="font-weight: bold; color: #3e9ca5">
                  Register User
                </h3>
                <hr style="border: 1px solid black" />
              </center>
              <div class="mb-3">
                <label for="email" class="form-label">Email address:</label>
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
              <div class="col d-grid gap-2">
                <button type="submit" class="btn btn-primer">
                  Submit
                </button>
              </div>
            </form>
            <hr />
            <div>
              <p>I Have Account ! <a href="#form-login" @click.prevent='toLogin'>Login</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 text-center">
        <div class="container">
          <img src="../assets/5138493.jpg" alt="" style="height: 400px;">
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
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login').catch(() => {})
    },
    register () {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>

</style>
