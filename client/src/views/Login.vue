<template>
  <section class="u-clearfix u-grey-15 u-section-1" src="" id="carousel_f685">
    <div class="u-clearfix u-sheet u-sheet-1">
      <h1 class="u-custom-font u-text u-title u-text-1">Bank Sampah</h1>
      <div class="u-align-left u-container-style u-group u-white u-group-1">
        <div class="u-container-layout u-container-layout-1">
          <h1 class="u-custom-font u-font-ubuntu u-text u-text-2">Login</h1>
          <div class="u-expanded-width u-form u-form-1">
            <form action="#" method="POST" class="u-clearfix u-form-spacing-27 u-form-vertical u-inner-form" style="padding: 0px;" source="custom" name="form">
              <div class="u-form-group u-form-name u-form-group-1">
                <label for="name-30a4" class="u-form-control-hidden u-label">Name</label>
                <input type="text" v-model="email" placeholder="email" id="name-30a4" name="name" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white u-input-1" required="">
              </div>
              <div class="u-form-email u-form-group u-form-group-2">
                <label for="email-cd2c" class="u-form-control-hidden u-label"></label>
                <input type="password" v-model="password" id="email-cd2c" name="email" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white u-input-2" required="" placeholder="password">
              </div>
              <div class="u-align-left u-form-group u-form-submit u-form-group-3">
                <button type="submit" @click.prevent="login" class="u-active-grey-75 u-black u-border-1 u-border-active-grey-75 u-border-black u-border-hover-grey-75 u-btn u-btn-submit u-button-style u-hover-grey-75 u-btn-1">Log in</button>
                <input type="submit" value="submit" class="u-form-control-hidden">
                <GoogleLogin :params="params" class="center my-3" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                <p>Don't have an account yet? <router-link to="/register">Register</router-link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img src="../assets/logo.png" alt="" class="u-image u-image-round u-radius-10 u-image-1" data-image-width="100%" data-image-height="100%">
    </div>
  </section>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      params: {
        client_id: '1063244199097-ngvat44cl0qedpdsjiuj389oil6d69rq.apps.googleusercontent.com'
      },
      renderParams: {
        longtitle: false
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    login () {
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
      this.email = ''
      this.password = ''
    },
    onSuccess (googleUser) {
      const idToken = googleUser.getAuthResponse().id_token
      this.$store.dispatch('googleLogin', { idToken })
    },
    onFailure (googleUser) {
      console.log(googleUser)
    }
  }
}
</script>
