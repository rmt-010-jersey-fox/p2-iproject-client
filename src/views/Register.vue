<template>
  <!-- Register -->
  <div class="row" style="margin-top: 8vh;">
    <div class="col-6 row">
      <div class="col-2"></div>
      <div class="col-8" style="margin-top: 15vh;">
        <form @submit.prevent="register">
          <h2>Barber Shop Customers</h2>
          <hr class="my-4">
          <div class="form-group" >
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" v-model="email" placeholder="Enter email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">User Name</label>
            <input type="input" v-model="username" placeholder="Enter username" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">phone</label>
            <input type="input" v-model="phone" placeholder="Enter phone" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" placeholder="Enter password" class="form-control" required>
          </div>
          <br>
          <button type="submit" class="btn btn-primary">REGISTER</button>
          <p class="my-2"> already have account? <a href=""><u><router-link :to="{ name: 'Login' }">login</router-link></u></a></p>
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
  name: 'Register',
  data () {
    return {
      email: '',
      username: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        email: this.email,
        username: this.username,
        phone: this.phone,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
