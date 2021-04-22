<template>
    <div class="col-sm-12">
    <!-- Authentication card start -->

        <form class="md-float-material form-material" @submit.prevent="login">
            <div class="auth-box card">
                <div class="card-block">
                    <div class="row m-b-20">
                        <div class="col-md-12">
                            <h3 class="text-center">Sign In</h3>
                        </div>
                    </div>
                    <div class="form-group form-primary">
                        <input type="text" class="form-control" v-model="email">
                        <span class="form-bar"></span>
                        <label class="float-label">Your Email Address</label>
                    </div>
                    <div class="form-group form-primary">
                        <input type="password" name="password" class="form-control" v-model="password">
                        <span class="form-bar"></span>
                        <label class="float-label">Password</label>
                    </div>
                    <div class="row m-t-30">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">Sign in</button>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </form>
        <!-- end of form -->
</div>
<!-- end of col-sm-12 -->
</template>
<script>
export default {
  name: 'loginPanel',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data)
      this.email = ''
      this.password = ''
    }
  }
}
</script>
