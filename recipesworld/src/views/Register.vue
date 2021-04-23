<template>
  <div>
    <div class="container-fluid" id="registerForm" style="background-image: url(https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg); padding:30vh; margin-bottom: 30px" >
    <div class="container-fluid text-end">
      <router-link to="/login" href="#">Back to login</router-link>
    </div>
    <div class="container" >
      <h3>Register</h3>
      <hr>
        <form id="registerForm" @submit.prevent="register">
          <div class="col-md-7 mb-2">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="name">
          </div>

          <div class="col-md-7 mb-2">
            <label for="">Email</label>
              <input type="text" class="form-control" v-model="email">
          </div>

          <div class="col-md-7 mb-2">
              <label for="">Password</label>
              <input type="password" class="form-control" v-model="password">
          </div>
          <button type="submit" class="btn btn-danger"> Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const { name, email, password } = this
      this.$store.dispatch('register', { name, email, password })
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
