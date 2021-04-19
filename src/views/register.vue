<template>
  <div
        id="register"
        style="margin-left: 75vh; margin-right: 75vh; margin-top: 10vh"
      >
        <p
          class="h1"
          style="text-align: center; margin-top: 10vh; margin-bottom: 5vh; font-family:oswald; font-size: 70px;"
        >
          Register Account
        </p>
        <hr />
        <form @submit.prevent="userRegister">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="inputEmail"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              v-model="inputPassword"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
</template>

<script>
export default {
    name: "Register",
    props: ['page', 'changePage'],
    data(){
      return {
        inputEmail: '',
        inputPassword: '',
      }
    },
    methods: {
      userRegister(){
        let payload = {
          email: this.inputEmail,
          password: this.inputPassword
        }
        this.$store.dispatch("userRegister",payload)
        this.inputEmail = ''
        this.inputPassword = ''
      }
    }
}
</script>

<style>

</style>