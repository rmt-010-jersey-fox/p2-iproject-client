<template>
   <!-- REGISTER -->
      <div class="container">
        <div class="row">
        <div class="col-4 offset-4 mt-4 " >
          <h3>Register</h3>
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="exampleInputEmail">Email address</label>
              <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group ">
              <label for="exampleInputPassword">Password</label>
              <input type="password" class="form-control" v-model="password">
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
        
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "register",
  data(){
    return {
      
      password: "",
      email: ""
    }
  },
  methods: {
        register(){
            let input = {email:this.email,username:this.username,password:this.password}
            console.log(input,'dari register');
           this.$store.dispatch('registerForm', input)
        }
        
    }
  
}
</script>

<style>

</style>