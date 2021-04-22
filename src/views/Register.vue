<template>
  <div>
      <div class="b-example-divider"></div>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <!-- <h1 class="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1> -->
          <!-- <img src="./img/login.jpg" alt="" style="margin-top: 30%;"> -->
        </div>
        <div class="col-10 mx-auto col-lg-5">
          <div class="container"></div>
          <h1 style="font-family: 'Dela Gothic One', cursive;
          ">Register</h1><br>
          <form class="p-5 border rounded-3 bg-light" id="form-login">
            <div class="form-floating mb-3" >
              <div class="form-floating mb-3">
                <label for="username">Username</label>
                <input type="username" class="form-control" id="username" v-model="username"  placeholder="Username">
              </div>
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
            </div>
            <div class="form-floating mb-3">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="register">Register</button>
            <hr class="my-4">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password,
        // router: this.$router
      })
    }
  }
};
</script>

<style>
</style>