<template>
  <div>
    <main class="form-login">
          <form class="col-12">
            <!-- <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
            <h1 class="h3 mb-3 fw-normal" style="font-family: 'Dela Gothic One', cursive;
            ">Login</h1>

            <div class="form-floating" >
              <label for="floatingInput">Email address</label>
              <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="Email">
            </div>
            
            <div class="form-floating">
              <label for="floatingPassword">Password</label>
              <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
            </div>
    
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="login()" >Login</button>
            <p class="mt-5 mb-3 text-muted">© NutriSum</p>
          </form>
        </main>
  </div>
</template>

<script>
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
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
        // router: this.$router.push('/login')
      })
    }
  }
}
</script>

<style>

</style>