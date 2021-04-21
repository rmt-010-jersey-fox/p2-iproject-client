<template>
  <div>
    <h4 class="card-title text-center">Sign Up</h4>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data () {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    async register () {
      console.log(this.email, this.password, this.username)
      try {
        const data = await this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          username: this.username
        })
        console.log(data)
      } catch (error) {}
    }
  }
}
</script>

<style></style>
