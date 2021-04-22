<template>
  <!-- REGISTER -->
<div class="hero-body">
    <div class="container">
        <div class="columns is-centered">
        <h1 class="title">REGISTER !!</h1>
        </div>
    <form @submit.prevent="register">
        <div class="columns is-centered">
            <div class="column is-5">
                <div class="field">
                    <label class="label">
                        Username
                    </label>
                    <div class="control has-icons-left">
                        <input v-model="registerUsername" type="text" class="input" placeholder="Fahrizal">
                        <span class="icon is-small is-left">
                            <i class="fa fa-male"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">
                        Email
                    </label>
                    <div class="control has-icons-left">
                        <input v-model="registerEmail" type="email" class="input" placeholder="fox@aol.com">
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
                        <input  v-model="registerPassword" type="password" class="input">
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">
                        <button type="submit" class="button is-success">
                            Register
                        </button>
                    </label>
                </div>
            </div>
        </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      registerUsername: '',
      registerEmail: '',
      registerPassword: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', { username: this.registerUsername, email: this.registerEmail, password: this.register.Password })
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
