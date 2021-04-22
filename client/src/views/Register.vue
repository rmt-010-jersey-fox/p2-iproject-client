<template>
  <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form @submit.prevent="register" class="row g-3">
                        <h4>Please Sign Up Your Account</h4>
                        <div class="col-12">
                            <label>Email</label>
                            <input type="text" name="email" v-model="userData.email" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password" v-model="userData.password" class="form-control" placeholder="Password">
                        </div>
                        <div class="col-12">
                            <label>Role</label>
                            <select v-model="userData.role" class="form-select" aria-label="Default select example">
                            <option selected>Please select your role</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary float-center">Sign Up</button>
                        </div>
                    </form>
                    <hr class="mt-4">
                    <div class="col-12">
                        <p class="text-center mb-0">Already have an account? please sign in <a href="#" @click.prevent="toLoginPage">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      userData: {
        email: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.userData)
    },
    toLoginPage () {
      this.$store.dispatch('toLoginPage')
    }
  }
}
</script>

<style>

</style>
