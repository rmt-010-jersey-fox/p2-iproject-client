<template>
<div>
<div class="container bg-light mt-5 w-50 p-5 border border-warning" id="loginform">
<form class="w-75 mx-auto" @submit.prevent="login">
    <h2>LOGIN FORM</h2>
    <div class="mb-3">
        <label class="form-label" >Email address</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary mx-auto" @click.prevent="login">Submit</button>
    <button type="submit" class="btn btn-primary mx-auto" @click.prevent="register">Register</button>
</form>
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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
