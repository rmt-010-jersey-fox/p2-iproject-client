<template>
  <div>
    <h4 class="card-title text-center mb-1">Sign Up</h4>
    <form @submit.prevent="register">
      <div class="mb-2">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="mb-2">
        <label class="form-label">Your Private Room Name</label>
        <input type="text" class="form-control" v-model="roomName" />
      </div>
      <div class="mb-2">
        <label class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-2">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <button type="submit" class="btn btn-outline-dark orn">Sign Up</button>
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
      username: '',
      roomName: ''
    }
  },
  methods: {
    async register () {
      console.log(this.email, this.password, this.username, this.roomName)
      try {
        const data = await this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          username: this.username,
          roomName: this.roomName
        })
        console.log(data, 'output register')
        this.$swal({
          icon: 'success',
          title: "You've been registered",
          timer: 1000
        })
      } catch (error) {
        const msg = error.response.data.message
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: msg
        })
        console.log(error)
      } finally {
        this.email = ''
        this.password = ''
        this.username = ''
        this.roomName = ''
      }
    }
  }
}
</script>

<style></style>
