<template>
  <div class="container">
    <div class="row">
      <div class="col-6 pt-5">
      <div class="card-form">
        <form class="container" @submit.prevent="login">
          <h3 class="mb-2 text-center">Sign In To Use Chat Room</h3>
          <div class="mb-3">
            <label></label>
            <input type="text" class="form-control" v-model="name" placeholder="Name">
          </div>
          <div class="mb-3">
            <label></label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
          </div>
          <div class="row">
            <div class="col-7">
              <button type="submit" class="btn btn-dark col-12">SIGN IN</button>
            </div>
            <div class="col-5">
              <p>don't have an account yet? <a href="">Register</a></p>
            </div>
          </div>
        </form>
      </div>
      </div>
  <Register></Register>
    </div>
  </div>
</template>

<script>
import Register from './Register'
export default {
  name: 'createName',
  components: {
    Register
  },
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    login () {
      const data = {
        name: this.name,
        email: this.email
      }
      this.$store.dispatch('login', data)
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style scoped>
  form {
    background-color: #383D41;
    border-radius:20px
  }
</style>
