<template>
  <section class="login-pg">
    <div class="custom-login-left"></div>
    <div class="custom-login-right">
      <div class="my-5 loginregister-form" style="padding: 50px; width: 700px;">
        <h3 class="text-center font-weight-bold">Login</h3>
        <form @submit.prevent="login" id="login">
          <div class="form-group my-2">
            <label for="email">Email</label>
            <input v-model="loginPayload.email" id="input-email-lg" type="email" class="form-control">
          </div>
          <div class="form-group my-2">
            <label for="password">Password</label>
            <input v-model="loginPayload.password" id="input-password-lg" type="password" class="form-control" placeholder="Min 6 characters">
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-warning my-3">Login</button>
          </div>
        </form>
        <hr>
        <div class="flex-login">
          <div class="text-center my-2">
            <small class="form-text text-bold" style="line-height: 30px;">Don't have an account</small>
            <div>
              <button @click.prevent="toRegister" id="to-register" type="submit" class="btn btn-warning">Create New Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginPayload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    toRegister () {
      this.$emit('doRegister')
    },
    login () {
      this.$store.dispatch('login', this.loginPayload)
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('user_email', res.data.email)
          this.$store.dispatch('confirmLogin', true)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
