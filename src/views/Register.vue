<template>
  <div id="login">
    <div class="login">
      <div class="col-sm-5">
        <div class="widget shadow">
          <div class="singin">
            <h4 class="widget-title mt-3 ml-4">Register</h4>
            <form method="post" @submit.prevent="register">
              <input type="text"  v-model="fullname" placeholder="Fullname" required>
              <input type="url"  v-model="image" placeholder="Image" required>
              <input type="text"  v-model="username" placeholder="Username" required>
              <input type="email" v-model="email" placeholder="Email" required>
              <input type="password" v-model="password" placeholder="Password" required>
              <button type="submit">Register</button> 
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
  name: 'Register',
  data () {
    return {
      fullname: '',
      username: '',
      email: '',
      password: '',
      image: ''
    }
  },
  methods: {
    register () {
      const { username, email, password, fullname , image} = this
      const data = { username, email, password, fullname, image }
      // console.log(data)
      this.$router.replace({ name: 'Login' })  
      this.$store.dispatch('register', data)
         .then(({ data }) => {
          console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Register',
            showConfirmButton: false,
            timer: 1500
          }) 
        }).catch(err => {
          console.log(err)
          if (err.message === 'Request failed with status code 409') {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Email is already registered',
              showConfirmButton: false,
              timer: 1000
            })
          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Password must be more than 6 Characters',
              showConfirmButton: false,
              timer: 1000
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
