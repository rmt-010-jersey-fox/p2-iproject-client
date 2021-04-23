<template>
  <div class="landing">
    <div v-show="section==='login'">
      <Login
        @doRegister="toRegister"
      />
    </div>
    <div v-show="section==='register'">
      <Register
        @doLogin="toLogin"
      />
    </div>
  </div>
</template>

<script>
import Login from '../components/Login'
import Register from '../components/Register'
export default {
  name: 'Landing',
  components: {
    Login, Register
  },
  data () {
    return {
      section: 'login'
    }
  },
  methods: {
    toRegister () {
      this.section = 'register'
    },
    toLogin () {
      this.section = 'login'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
