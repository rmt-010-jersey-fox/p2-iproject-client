<template>
  <section class="register-pg">
    <div class="custom-login-left"></div>
    <div class="custom-login-right">
      <div class="my-5 bg-light border loginregister-form" style="padding: 50px; width: 700px;">
        <h3 class="text-center font-weight-bold">Register</h3>
        <form id="login">
          <div class="form-group my-2">
            <label for="email">Email</label>
            <input id="input-email-lg" type="email" class="form-control">
          </div>
          <div class="form-group my-2">
            <label for="password">Password</label>
            <input id="input-password-lg" type="password" class="form-control" placeholder="Min 6 characters">
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-warning my-3">Register</button>
          </div>
        </form>
        <hr>
        <div class="flex-register">
          <div class="text-center my-2">
            <small class="form-text text-bold" style="line-height: 30px;">Already have an account?</small>
            <div>
              <button @click.prevent="toLogin" id="to-register" type="submit" class="btn btn-warning">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    toLogin () {
      this.$emit('doLogin')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
