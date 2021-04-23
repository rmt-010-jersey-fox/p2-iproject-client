<template>
    <div>
        <Banner/>
        <Tagline/>
        <div class="container">
        <div class="row">
            <div class="col-sm-6">
            <Carousel/>
            </div>
            <div class="col-sm-6">
                <form  @submit.prevent="postLogin" class="login-form">
                <div class="form-group">
                <label for="email-login">Email address</label>
                <input  v-model="email" type="email" class="form-control">
                </div>
                <div class="form-group">
                <label for="password-login">Password</label>
                <input  v-model="password"  type="password" class="form-control">
                </div>
                <button type="submit" class="btn btn-warning">Login</button>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Tagline from '../components/Tagline'
import Carousel from '../components/Carousel'

export default {
    name : "Login",
    data() {
        return {
            email : '',
            password : ''
        }
    },
    components : {
        Banner,
        Tagline,
        Carousel
    },
    methods : {
        postLogin() {
            let data = {
                email : this.email,
                password : this.password
            }
           this.$store.dispatch('login', data)
           .then(data => {this.$router.push({name : 'Homepage'})})
           .catch(err => {console.log(err)})
        }
    }
}
</script>

<style>

</style>