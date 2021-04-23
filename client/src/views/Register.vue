<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
      </div>
      <div class="col-6 pt-5">
      <div class="card-form">
        <form @submit.prevent="register">
          <h3 class="mb-2 text-center">Sign Up To Use Chat Room</h3>
          <div class="mb-3">
            <label></label>
            <input type="text" class="form-control" v-model="name" placeholder="Name">
          </div>
          <div class="mb-3">
            <label></label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
          </div>
          <div class="row">
            <div class="col-5">
              <p>already have an account? <a href="" @click.prevent="changeLogin">Login</a></p>
            </div>
            <div class="col-7">
              <button type="submit" class="btn col-12 btnAdd">SIGN UP</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    register () {
      const { name, email } = this
      const data = {
        name,
        email
      }
      // console.log(data)
      this.$store.dispatch('register', data)
      this.name = ''
      this.email = ''
    },
    changeLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
form{
    color: white;
}

h3{
  color: #E968C5;
  font-weight: 600;
}

p{
    color: #838589;
    font-weight: 800;
}

p a{
  color: #E968C5;
}

button{
    background-color: #E968C5;
    color: white;
    font-weight: 600;
    border-radius: 10px;
  }
</style>
