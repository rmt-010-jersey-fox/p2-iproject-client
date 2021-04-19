<template>
  <div id="register-page" class="page form-page">
    <h2>Register</h2>
    <UserForm />
    <br>
    <p>Already have an account? <router-link :to="{ name: 'Login'}">Login with your account now!</router-link></p>
  </div>
</template>

<script>
import UserForm from '../components/UserForm'

export default {
  name: 'Register',
  components: { UserForm }
}
</script>

<style>

</style>
