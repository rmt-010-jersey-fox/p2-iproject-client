<template>
              <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/kuy2.png'" alt="" />
              <h3>welcome to franchise kuy</h3>
            </div>

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

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="#"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  @click.prevent="login"
                  >Login</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#" class="link footer-link" @click.prevent="changePage">Create Account</a>
                </h6>
              </div>
            </template>
          </card>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
export default {
  name: 'loginPanel',
  data () {
      return {
          email: '',
          password: ''
      }
  },
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  methods: {
      changePage() {
          this.$store.commit('setPage','register')
      },
      login () {
        const payload = {
            email: this.email,
            password: this.password
        }
        this.$store.dispatch('login', payload)
    }
  }
}
</script>