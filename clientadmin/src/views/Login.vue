<template>
  <div class="hero is-dark is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
            </div>
            <h1 class="title columns is-centered">Login!!</h1>
            <div class="columns is-centered">
                <div class="column is-4">
                    <form @submit.prevent="login" action="" class="box">
                        <div class="field">
                            <label class="label">
                                Email
                            </label>
                            <div class="control has-icons-left">
                                <input v-model="loginEmail" type="email" class="input" placeholder="fox@aol.com">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">
                                Password
                            </label>
                            <div class="control has-icons-left">
                                <input  v-model="loginPassword" type="password" class="input">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">
                                <button type="submit" class="button is-success">
                                    Login
                                </button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.loginEmail, password: this.loginPassword })
    }
  }

}
</script>

<style>

</style>
