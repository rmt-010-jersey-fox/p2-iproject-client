<template>
  <section class="u-clearfix u-grey-15 u-section-1" src="" id="carousel_f685">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h1 class="u-custom-font u-text u-title u-text-1">Bank Sampah</h1>
        <div class="u-align-left u-container-style u-group u-white u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <h1 class="u-custom-font u-font-ubuntu u-text u-text-2">Register</h1>
            <div class="u-expanded-width u-form u-form-1">
              <form action="#" method="POST" class="u-clearfix u-form-spacing-27 u-form-vertical u-inner-form" style="padding: 0px;" source="custom" name="form">
                <div class="u-form-group u-form-name u-form-group-1">
                  <label for="name-20a4" class="u-form-control-hidden u-label">Email</label>
                  <input type="text" v-model="email" placeholder="email" id="name-20a4" name="email" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white u-input-1" required="">
                </div>
                <div class="u-form-group u-form-name u-form-group-1">
                  <label for="name" class="u-form-control-hidden u-label">Name</label>
                  <input type="text" v-model="name" placeholder="e.g: John Wick" id="name" name="name" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white u-input-1" required="">
                </div>
                <div class="u-form-email u-form-group u-form-group-2">
                  <label for="password" class="u-form-control-hidden u-label"></label>
                  <input type="password" v-model="password" id="password" name="password" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white u-input-2" required="" placeholder="password">
                </div>
                <div class="u-align-left u-form-group u-form-submit u-form-group-3">
                  <a type="submit" @click.prevent="register" class="u-active-grey-75 u-black u-border-1 u-border-active-grey-75 u-border-black u-border-hover-grey-75 u-btn u-btn-submit u-button-style u-hover-grey-75 u-btn-1">Register</a>
                  <input type="submit" value="submit" class="u-form-control-hidden">
                  <p>Already have an account ? <router-link to="/login">Login</router-link></p>
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
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    register () {
      const { email, password, name } = this
      this.$store.dispatch('register', { email, password, name })
      this.email = ''
      this.password = ''
      this.name = ''
    }
  }
}
</script>
