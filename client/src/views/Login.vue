<template>

      <div class="bg">
        <div class="container myForm" >
            <div class="row m-0 h-100 ">
                <div class="col">
                    <form @submit.prevent="handleLogin">
                        <div class="mb-3">
                            <label for="email" class="form-label">EMAIL</label>
                            <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email here .."
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">PASSWORD</label>
                            <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password here .."
                                required>
                        </div>
                        <div class="mb-3">
                             <button type="submit" class="btn btn-outline-success btn-lg rounded-pill">LOGIN</button>
                        </div>
                    </form>
                    <p>Don't have an account? <router-link to="/register">REGISTER</router-link></p>
                </div>
        </div>
        </div>
      </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
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
        min-width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        padding: 10px;
        background-color: #e1f4f3;
    }

    p {
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        .myForm {
            min-width: 90%;
        }
    }

    /* .bg {

        background-image: url("https://wallpapercave.com/wp/wp2618282.png");

        height: 100%;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    } */

</style>
