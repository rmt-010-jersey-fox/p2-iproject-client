<template>
  <div class="luar">
      <div class="row">
          <div class="col-6">
              <h1>Selamat Datang</h1>
          </div>
          <div class="col-6 mt-15">
             <div class="columns is-centered ">
                    <form @submit.prevent="login" action="" class="box">
                        <div class="field">
                            <label class="label">
                                Email
                            </label>
                            <div class="control has-icons-left">
                                <input v-model="loginEmail" type="email" class="input" placeholder="fox@aol.com">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">
                                Password
                            </label>
                            <div class="control has-icons-left">
                                <input  v-model="loginPassword" type="password" class="input">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">
                                <button type="submit" class="button is-success">
                                    Login
                                </button>
                            </label>
                        </div>
                    </form>
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
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.loginEmail, password: this.loginPassword })
    }
  }
}
</script>

<style>
.box{
    margin-top: 300px;
}
.luar{
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    background-image: url(https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2020/07/1.-Japanese-Scandinavian-yang-Bersahaja.jpg) ;
}
</style>
