<template>
      <!-- START FORM LOGIN -->
  <form @submit.prevent="login">
    <div class="container">
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
         <!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin> -->

      </div>
    </div>
  </form>
  <!-- END FORM LOGIN -->
</template>

<script>
export default {
  data () {
    return {
      email : '',
      password : ''
    }
  },
  methods : {
    login () {
      // console.log('setelah store');
      let payload = {
        email : this.email,
        password : this.password
      }
      // console.log(payload);
      this.$store.dispatch('login',payload)
    }
  }
}
</script>

<style>

</style>
