<template>
      <!-- START FORM LOGIN -->
  <form @submit.prevent="login">
    <div class="container">
      <br>
    <br>
    <br>
    <br>
      <h3 class="mb-4 text-success">Log In</h3>
      <div class="mb-3 col-3">
        <label class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control">
      </div>
      <div class="mb-3 col-3">
        <label class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control">
      </div>
      <div class="d-flex col-3">
        <button type="submit" class="btn btn-primary" style="width:250px; height:40px">Sign In</button><br>
      </div>
      <div class="d-flex col-3">
         <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>

      </div>
    </div>
  </form>
  <!-- END FORM LOGIN -->
</template>

<script>
import GoogleLogin from 'vue-google-login'
import Swal from 'sweetalert2'
export default {
  name: 'App',
  data () {
    return {
      params: {
        client_id:
          '499382285948-crhj3h7mt4h41kuvfo7pr6035hm4u62k.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      email : '',
      password : ''
    }
  },
  components: { GoogleLogin },
  methods : {
    login () {
      let payload = {
        email : this.email,
        password : this.password
      }
      this.$store.dispatch('login',payload)
    },
    onSuccess (googleUser) {
      const token = googleUser.getAuthResponse().id_token
      this.$store.dispatch('googleLogin', token)
    },
    onFailure (error) {
      Swal.fire('login google gagal', error)
    }
  }
}
</script>

<style>

</style>
