<template>
<div>
  <div class="register-container">
    <div class="left-register-page">
      <h1>REGISTER</h1>
      <form @submit.prevent="register()">
        <input
          class="input-form"
          type="email"
          placeholder="your email here"
          required
          v-model='email'
        />
        <input
          class="input-form"
          type="text"
          placeholder="your username here"
          required
          v-model='username'
        />
        <input
          class="input-form"
          type="password"
          placeholder="your password here"
          required
          v-model='password'
        />
        <input
          class="input-form"
          type="password"
          placeholder="re-enter your password here"
          required
          v-model='confirmPassword'
        />
        <button type="submit" class="btn btn-primary">Register</button>
        <br>
        <button @click.prevent="changePage('Login')" class="btn btn-primary">I Have An Account</button>
      </form>
    </div>
  </div>
  <Footer class="footer"/>
</div>
</template>

<script>
import Footer from 'vue-hacktiv-footer'
import Swal from 'sweetalert2'

export default {
  name: 'Register',
  components: {
    Footer
  },
  methods: {
    changePage (page) {
      this.$store.dispatch('changePage', page)
    },
    register () {
      if (this.password === this.confirmPassword) {
        const payload = {
          email: this.email,
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('register', payload)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'NOT MATCHING PASSWORD'
        })
      }
    }
  },
  data () {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  width: 100vw;
  height: 94.75vh;
  overflow: hidden;
}

.left-register-page {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #01064a;
}

.left-register-page h1 {
  color: white;
}

.left-register-page form {
  display: flex;
  flex-direction: column;
}

.left-register-page form input{
  margin: 1rem 0;
}

.footer {
  background-color: white;
}
</style>
