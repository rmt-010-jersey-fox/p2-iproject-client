<template>
    <section class="login-block">
      <div class="container1">
        <div class="row">
          <div class="col-md-4 banner-sec">
            <div class="signup__overlay"></div>
            <div class="banner">
              <div id="demo" class="carousel slide carousel-fade" data-ride="carousel">
              </div>
            </div>
          </div>
          <div class="col-md-8 login-sec">
            <h3 class="text-center mb-5">REGISTER</h3>
            <form class="login-form validate-form" @submit.prevent="register">
              <div class="wrap-input100 validate-input">
                <span class="label-input100 text-lg"><strong>Fullname</strong></span>
                <input class="input" type="text" name="full_name" v-model="full_name">
              </div>
              <div class="wrap-input100 validate-input">
                <span class="label-input100 text-lg"><strong>Username</strong></span>
                <input class="input" type="text" name="username" v-model="username">
              </div>
              <div class="wrap-input100 validate-input">
                <span class="label-input100 text-lg"><strong>Email</strong></span>
                <input class="input" type="text" name="email" v-model="email">
              </div>
              <div class="wrap-input100 validate-input">
                <span class="label-input100"><strong>Password</strong></span>
                <input class="input" type="password" name="password" v-model="password">
              </div>
              <div class="container-login-form-btn">
                <div class="wrap-login-form-btn">
                  <button class="btn btn-primary mr-2">
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      full_name: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const param = {
        full_name: this.full_name,
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', param)
        .then(() => {
          this.$router.push({ name: 'Login' })
          this.$swal.fire(
            'Succes register!',
            'You can login now',
            'success'
          )
        })
        .catch((error) => {
          this.$vToastify.error(error.response.data.message)
        })
    }
  },
  computed: {
  }
}
</script>

<style>
.login-sec {
    padding: 50px 30px;
    position: relative;
}

.login-sec .copy-text {
    position: absolute;
    width: 80%;
    bottom: 20px;
    font-size: 13px;
    text-align: center;
}

.login-sec h2 {
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 30px;
}

.login-sec h2:after {
    content: " ";
    width: 100px;
    height: 5px;
    display: block;
    margin-top: 8px;
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto
}

.banner-text {
    width: 70%;
    position: absolute;
    bottom: 40px;
    padding-left: 20px;
}

.banner-text h2 {
    color: #000;
    font-weight: 600;
}

.banner-text h2:after {
    content: " ";
    width: 100px;
    height: 5px;
    background: #000;
    display: block;
    margin-top: 20px;
    border-radius: 3px;
}

.banner-text p {
    color: #000;
}

/* login start */

.container-login100-form-btn {
    margin: 0 auto;
    display: block;
    text-align: center;
    padding-top: 1%;
    padding-bottom: 2%;
}

.login100-form {
    width: 100%;
}

.validate-input {
    position: relative;
}

.wrap-input100 {
    width: 95%;
    position: relative;
    border-bottom: 2px solid #d9d9d9;
    margin-bottom: 5%;
}

.label-input100 {

    font-size: 14px;
    color: #333333;
    line-height: 1.5;
    padding-left: 7px;
}

textarea:focus,
input:focus {
    border-color: transparent !important;
}

.input100:focus+.focus-input100::before {
    width: 100%;
}

.input100 {
    font-size: 12px;
    color: #333333;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 30px;
    background: transparent;
    padding: 0 7px 0 43px;
}

.focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}

.focus-input100::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7f7f7f;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.focus-input100::after {
    font-family: "FontAwesome";
    content: "\f007";
    color: #adadad;
    font-size: 22px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: calc(100% - 20px);
    bottom: 0;
    left: 0;
    padding-left: 13px;
    padding-top: 3px;
}

.focus-input100.password::after {
    font-family: "FontAwesome";
    content: "\f023";
    color: #adadad;
    font-size: 22px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: calc(100% - 20px);
    bottom: 0;
    left: 0;
    padding-left: 13px;
    padding-top: 3px;
}

input {
    outline: none;
    border: none;
}

.flex-c-m {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
}

.login100-social-item {
    font-size: 12px;
    color: #000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin: 5px;
}

.bg1 {
    background-color: #3b5998;
}

.bg3 {
    background-color: #ea4335;
}

</style>
