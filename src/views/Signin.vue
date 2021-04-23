<template>
  <div class="hero is-fullheight is-light has-bacground py-6">
    <section class="column is-4 is-offset-4 has-background-white">
      <div class="container">
        <h1 class="title">Sign In</h1>
        <form @submit.prevent="onSubmit">
          <b-field label="Username">
            <b-input v-model="username"> </b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" v-model="password"> </b-input>
          </b-field>
          <b-button native-type="submit" type="is-dark">Sign In</b-button>
          <div class="container my-3 is-flex is-justify-content-center">
            <GoogleLogin
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
            ></GoogleLogin>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "Signin",
  components: { GoogleLogin },
  data() {
    return {
      username: "",
      password: "",
      params: {
        client_id:
          "386372135074-7ievsr0h4ge77sgme8gp2ujc0orubudd.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 50,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch("signin", payload);
    },
    onSuccess(googleUser) {
      this.$store.dispatch("signinGoogle", googleUser);
    },
  },
};
</script>
