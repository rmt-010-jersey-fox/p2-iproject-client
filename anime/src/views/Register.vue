<template>
  <div class="register">
    <div style="height: 1rem"/>
    <div class="container  is-flex is-align-items-center is-justify-content-center" style="min-height: 100vh">
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_XRLjtE.json"  background="transparent"  speed="1"  style="width: 600px; height: 600px;"  loop autoplay v-if="isLoading === true"/>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop autoplay v-if="isLoading === false"/>
      <div class="column p-5 is-4" v-if="isLoading === false">
          <form class="box" @submit.prevent= "register">
            <h5 class="subtitle is-5">Register Here:</h5>
            <div v-if="isError === true">
              <p>Oops.. It's a Bad request, you must to see what's going on:</p>
            </div>
            <div v-if="isError === true">
              <ul v-for="(error, idx) in errors" :key="idx" style="color: red">
                <li>{{error}}</li>
              </ul>
            </div>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Username" v-model= "username">
                <span class="icon is-small is-left">
                <i class="fa fa-user-circle"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
              </div>
            </div>
            <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" v-model= "email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="password" placeholder="Password" v-model= "password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-success">Submit</button>
              </div>
            </div>
            <p>If you already registered, just click <router-link to="/login">Here</router-link></p>
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
      username: '',
      email: '',
      password: '',
      isLoading: false,
      isError: false,
      errors: []
    }
  },
  methods: {
    register () {
      const obj = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.isLoading = true
      this.$store.dispatch('register', obj)
        .then(res => {
          // console.log(res.data)
          this.$swal.fire({
            icon: 'success',
            title: 'Congrats, you registered on this web',
            text: 'Now, you just login!',
            timer: 5000
          })
          this.$router.push('/login')
          this.isError = false
        })
        .catch(err => {
          this.isError = true
          this.errors = err.response.data.message
        })
        .finally(() => {
          this.name = ''
          this.email = ''
          this.password = ''
          this.isLoading = false
        })
    }
  }
}
</script>

<style>

</style>
