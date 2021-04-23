<template>
    <div>
            <!-- LOGIN --> 
        <div class="bg-image" 
            style="background-image: url('https://www.wallpapertip.com/wmimgs/234-2344651_museum-pictures-girl-desktop-background.jpg');
            height: 100vh"
            border
            >
            <div class="container">
                <div class="row">
                    <div class="col-4 offset-4 mt-4" >
                        <h3 >Login</h3>
                        <form @submit.prevent="login">
                        <div class="form-group" >
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "login",
    data(){
        return {
            email: "",
            password: ""
        }
    },

    methods: {
        login(){
            let input = {email:this.email,password:this.password}
            // console.log(input,'input');
            this.$store.dispatch('loginForm', input)
        }
        
    }
}
</script>

<style>

</style>