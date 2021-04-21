<template>
  <section>
    <form class="myForm">
    <h1 style="color:#8167a9;">Login Page</h1><br>
        <div class="form-group" style="color:#8167a9;">
          <label for="email">Email address</label>
          <input type="email" 
          class="form-control" 
          v-model="email"
          
          aria-describedby="emailHelp">
          
        </div>
        <div class="form-group">
          <label for="password" style="color:#8167a9;">Password</label>
          <input type="password" 
          class="form-control" 
          v-model="password">
        </div>
       
        <button type="button" @click.prevent="login" class="btn btn-dark">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
 name: 'Login',
 data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        login() {
            console.log('masuk login')
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style scoped>
.myForm {
  min-width: 500px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  margin-top: 50px;
}
@media (max-width: 500px) {
  .myForm {
    min-width: 90%;
  }
}
</style>