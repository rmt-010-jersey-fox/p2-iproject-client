<template>
  <form @submit.prevent="login" class="container-fluid" id="loginForm" style= "background-image: url(https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg); padding:30vh; margin-bottom: 30px;">
  <h3>Hey, welcome to <router-link to="/" href="#">Recipes World!</router-link></h3>
  <hr>
      <div class="col-md-5">
          <label for="inputEmail6" class="col-form-label">Email</label>
        </div>
        <div class="col-md-5">
          <input type="email" id="inputEmail6" class="form-control" v-model="email">
        </div>
      <div class="col-md-5">
        <label for="inputPassword6" class="col-form-label">Password</label>
      </div>
      <div class="col-md-5">
        <input type="password" id="inputPassword6" class="form-control" v-model="password">
      </div><br>
      <div class="col-md-5">
          <button type="submit" class="btn btn-danger">Login</button>
      </div>
      <div class="mt-5">
        <span>Don't have account ?</span>
        <router-link to="/register" href="#" >Register Now</router-link>
      </div>
      </form>
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
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
      this.$nextTick(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

</style>
