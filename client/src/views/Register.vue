<template>
  <div class="container">
    <h1 class="text-dark text-center" style="margin-top: 14vh">Bank Sampah</h1>
    <form id="register">
      <div class="card justify-content mx-auto mt-5 p-3" style="width: 30vw">
      <h2 class="text-dark" style="text-align: center;">Register</h2>
        <div class="mb-3 form-floating">
          <input type="email" v-model="email" class="form-control" id="InputRegist" placeholder="example@mail.com" aria-describedby="emailHelp">
          <label for="InputRegist" class="form-label">Email address</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="text" v-model="name" class="form-control" id="name" placeholder="John Wick">
          <label for="name" class="form-label">Name</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="password" v-model="password" class="form-control" placeholder="password" id="RegistPassword">
          <label for="RegistPassword" class="form-label">Password</label>
        </div>
        <button type="submit" @click.prevent="register" class="btn my-2 btn-primary">Register</button>
        <p>Already have an account ? <router-link to="/login">Login</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    register () {
      const { email, password, name } = this
      this.$store.dispatch('register', { email, password, name })
      this.email = ''
      this.password = ''
      this.name = ''
    }
  }
}
</script>
