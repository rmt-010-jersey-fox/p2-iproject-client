<template>
  <div id="login-page" class="page form-page">
      <h2>Login</h2>
      <UserForm />
      <br>
      <p>Don't have an account yet? <router-link :to="{ name: 'Register'}">Register a new account!</router-link></p>
  </div>
</template>

<script>
import UserForm from '../components/UserForm'

export default {
  name: 'Login',
  components: { UserForm }
}
</script>

<style>

</style>
