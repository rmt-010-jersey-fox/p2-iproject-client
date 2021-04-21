 <template>
    <!-- AWAL FORM REGISTER -->

    <form @submit.prevent="register">
        <br>
    <br>
    <br>
    <br>
    <br>
      <div class="container">
        <div class="row text-center">
          <h1 class="display-1 text-primary">Welcome to Book Lovers</h1>
        </div>
        <div class="row d-flex" style="align-items: center ">
          <div class="col-4">
            <h3 class="mb-4 text-success">Register</h3>
            <div class="mb-3 col-8">
              <label class="form-label">User Name</label>
              <input v-model="username" type="text" class="form-control">
            </div>
            <div class=" mb-3 col-8">
              <label class="form-label">Email address</label>
              <input v-model="inputRegisterEmail" type="email" class="form-control">
            </div>
            <div class="mb-3 col-8">
              <label class="form-label">Password</label>
              <input v-model="inputRegisterPassword" type="password" class="form-control">
            </div>
            <button type="submit" style="width:245px; height:40px" class="btn btn-primary">Register</button>
          </div>
          <div class="col-8 text-center">
            <img
              src="https://cdn.dribbble.com/users/24158/screenshots/14414173/media/0ba2af910e5a71b94ef5af77b730f134.jpg?compress=1&resize=1000x750"
              style="" alt="">
          </div>
        </div>
      </div>
    </form>
    <!-- AKHIR FORM REGISTER -->
  </template>

<script>
export default {
  data () {
    return {
      username : '',
      inputRegisterEmail : '',
      inputRegisterPassword : ''
    }
  },
  methods : {
    register () {
      let payload = {
        username : this.username,
        email : this.inputRegisterEmail,
        password : this.inputRegisterPassword
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>

</style>
