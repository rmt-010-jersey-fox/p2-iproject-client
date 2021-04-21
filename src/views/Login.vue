<template>
      <!-- START FORM LOGIN -->
  <form @submit.prevent="login">
    <div class="container">
      <br>
    <br>
    <br>
    <br>
    <br>
    <div class="row text-center">
       <h1 class="display-1 text-primary">Welcome to Book Lovers</h1>
    </div>
    <div class="row d-flex" style="align-items: center ">
      <div class="col-4">
        <h3 class="mb-4 text-success">Log In</h3>
          <div class="mb-3 col-9">
            <label class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control">
          </div>
          <div class="mb-3 col-9">
            <label class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control">
          </div>
          <div class="d-flex">
            <button type="submit" class="btn btn-primary" style="width:250px; height:40px">Sign In</button><br>
          </div>
          <div class="d-flex">
            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
          </div>
      </div>
      <div class="col-8 text-center">
        <img src="https://cdn.dribbble.com/users/24158/screenshots/14414173/media/0ba2af910e5a71b94ef5af77b730f134.jpg?compress=1&resize=1000x750" style="" alt="">
      </div>
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
