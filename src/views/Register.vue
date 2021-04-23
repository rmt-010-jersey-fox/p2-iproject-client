<template>
<div>
<div class="container bg-light mt-5 w-50 p-5 border border-warning">
<form class="w-75 mx-auto" @submit.prevent="register">
    <h2>REGISTER FORM</h2>
    <div class="mb-3">
        <label class="form-label" >Username</label>
        <input type="text" class="form-control" v-model="username">
    </div>
    <div class="mb-3">
        <label class="form-label" >Email address</label>
        <input type="email" class="form-control" v-model="email">
    </div>
    <div class="mb-3">
        <label class="form-label" >Address</label>
        <input type="text" class="form-control" v-model="address">
    </div>
    <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary mx-auto">Submit</button>
</form>
</div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      username: '',
      address: ''
    }
  },
  methods: {
    register () {
      const payload = {
        username: this.username,
        address: this.address,
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
