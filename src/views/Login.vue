<template>
  <div id="login">
    <div class="login">
      <div class="col-sm-5">
        <div class="widget shadow">
          <div class="singin">
            <h4 class="widget-title mt-3 ml-4">Login</h4>
            <form method="post" @submit.prevent="login">
            <!-- <button type="submit" class="mb-4"  data-onsuccess="onSignIn">Google Login</button> -->
              <input type="text" v-model="email" placeholder="Email">
              <input type="password" v-model="password" placeholder="Password">
              <div class="checkbox">
                <label>
                <input type="checkbox" checked="checked"><i class="check-box"></i>
                <span>Remember Me</span>
                </label>
              </div>
              <button type="submit">Log In</button>
            </form>
          </div>	
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const { email, password } = this
      const data = { email, password }
      this.$store.dispatch('login', data)
        .then(({ data }) => {
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Welcome to Forum Games',
            showConfirmButton: false,
            timer: 1500
          })
          this.$store.commit('login', data)
          this.$store.dispatch('getUser', data)
          this.$router.replace({ name: 'ThreadList' })
        }).catch(err => {
          console.log(err)
          // alert(err)
          if (err.message === 'Request failed with status code 404'){
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Invalid Email / Password',
              showConfirmButton: false,
              timer: 1500
            })
          }
          
        })
    }
  }
}
</script>

<style>
.login {
  margin-left: 35%;
  margin-top: 5%;
  box-shadow: 10%;
}
</style>
