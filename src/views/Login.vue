<template>
<div>
  <div class="login-container">
    <div class="left-login-page">
      <h1>LOGIN</h1>
      <form @submit.prevent="login()">
        <input
          class="input-form"
          type="email"
          placeholder="your email here"
          required
          v-model='email'
          id="email-login"
        />
        <input
          class="input-form"
          type="password"
          placeholder="your password here"
          required
          v-model='password'
          id="password-login"
        />
        <button type="submit" class="btn btn-primary">Login</button>
        <br>
        <button @click.prevent="changePage('Register')" class="btn btn-primary">Don't Have Account</button>
      </form>
    </div>
  </div>
  <Footer class="footer"/>
</div>
</template>

<script>
import Footer from 'vue-hacktiv-footer'

export default {
  name: 'Login',
  components: {
    Footer
  },
  methods: {
    changePage (page) {
      this.$store.dispatch('changePage', page)
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  width: 100vw;
  height: 94.75vh;
  overflow: hidden;
}

.left-login-page {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #01064a;
}

.left-login-page h1 {
  color: white;
}

.left-login-page form {
  display: flex;
  flex-direction: column;
}

.left-login-page form input{
  margin: 1rem 0;
}

.footer {
  background-color: white;
}
</style>
