<template>
    <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/kuy2.png'" alt="" />
             <h3> one step closer to becoming a king, get your wallet ready my son</h3>
            </div>
        <form method="post" @submit.prevent="register">

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Email"
              type="email"
              v-model="email"
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password"
              type="password"
              v-model="password"
            >
            </fg-input>

            <!-- <template slot="raw-content"> -->
              <div class="card-footer text-center">
                <a
                  href="#"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  @click.prevent="register"
                  >Register</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  Already have an Account? <a href="#" class="link footer-link" @click.prevent="changePage">Login</a>
                </h6>
              </div>
            <!-- </template> -->
        </form>
    </card>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
export default {
  name: 'registerPanel',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    changePage() {
        this.$store.commit('setPage','login')
    },
    register () {
        const payload = {
            email: this.email,
            password: this.password
        }
        this.$store.dispatch('register', payload)
    }
  }
}
</script>