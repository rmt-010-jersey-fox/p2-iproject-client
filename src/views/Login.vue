<template>
  <div id="login-page" class="page form-page">
      <h2>Login</h2>
      <UserForm
        @submitForm="login"
        :formType="'login'"
      />
      <br>
      <p>Don't have an account yet? <router-link :to="{ name: 'Register'}">Register a new account!</router-link></p>
  </div>
</template>

<script>
import UserForm from '../components/UserForm'
import { mapActions } from 'vuex'

export default {
  name: 'Login',

  components: { UserForm },

  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style>

</style>
