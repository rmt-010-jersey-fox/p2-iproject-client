<template>
  <!-- Login -->
  <div class="row" style="margin-top: 8vh;">
    <div class="col-6 row">
      <div class="col-2"></div>
      <div class="col-8" style="margin-top: 15vh;">
        <form @submit.prevent="login">
          <h2>E-Commerse Customers</h2><hr class="my-4">
          <div class="form-group">
            <label for="exampleInputEmail1">
              Email Address
            </label>
            <input type="email" v-model="email" placeholder="Enter email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">
              Password
            </label>
            <input type="password" v-model="password" placeholder="Enter password" class="form-control" required>
          </div>
          <br>
          <button type="submit" class="btn btn-primary">LOGIN</button>
          <p class="my-2"> dont have account?<router-link :to="{ name: 'Register' }"><u>register now</u></router-link></p>
        </form>
      </div>
    </div>
    <div class="col-6">
      <img src="https://www.dezvolta.com/img/ecommerce-website-design-devlopment.png" alt="image cannot be shown" style="width: 100%;">
    </div>
  </div>
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
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
