
<template>
  <div class="hero is-fullheight is-light has-bacground py-6">
    <section class="column is-4 is-offset-4 has-background-white">
      <div class="container">
        <h1 class="title">Sign Up</h1>

        <form @submit.prevent="onSubmit">
          <b-field label="Username">
            <b-input v-model="username"> </b-input>
          </b-field>
          <b-field label="Email">
            <b-input v-model="email"> </b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" v-model="password"> </b-input>
          </b-field>
          <b-button native-type="submit" type="is-dark">Sign Up</b-button>
          <div class="container my-3 is-flex is-justify-content-center"></div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        username: this.username,
        password: this.password,
        email: this.email,
      };
      this.$store.dispatch("signUp", payload);
    },
  },
  computed: {},
};
</script>
