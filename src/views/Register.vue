<template>
  <div class="container">
        <div class="row">
            <div class="col-sm-4">
            </div>
            <div class="col-sm-4">
                <form  @submit.prevent="postRegister" class="login-form">
                <div class="form-group">
                <label for="email-login">Email address</label>
                <input  v-model="email" type="email" class="form-control">
                </div>
                <div class="form-group">
                <label for="email-login">First Name</label>
                <input  v-model="first_name" type="first_name" class="form-control">
                </div>
                <div class="form-group">
                <label for="email-login">Last Name</label>
                <input  v-model="last_name" type="last_name" class="form-control">
                </div>
                <div class="form-group">
                <label for="password-login">Password</label>
                <input  v-model="password"  type="password" class="form-control">
                </div>
                <button type="submit" class="btn btn-warning">Register</button>
            </form>
            </div>
            <div class="col-sm-4">
            </div>
        </div>
        </div>
</template>

<script>
export default {
    name : "Register",
    data() {
        return {
            email : '',
            password : '',
            first_name : '',
            last_name : ''
        }
    },
    methods : {
         postRegister() {
            let data = {
                email : this.email,
                password : this.password,
                first_name : this.first_name,
                last_name : this.last_name
            }
           this.$store.dispatch('register', data) 
        }
    }
}
</script>

<style>

</style>
