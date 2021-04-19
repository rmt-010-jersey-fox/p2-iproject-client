<template>
   <div
    id="login"
    style="margin-left: 75vh; margin-right: 75vh; margin-top: 10vh"
  >
    <p
      class="h1"
      style="text-align: center; margin-top: 10vh; margin-bottom: 5vh; font-family:oswald; font-size: 70px;"
    >
      Login to MangAPP!
    </p>
    <hr />
    <form @submit.prevent="userLogin">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          v-model="inputEmail"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="inputPassword" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["page"],
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
    };
  },
  methods: {
    userLogin() {
      let payload = { email: this.inputEmail, password: this.inputPassword };
      this.$store.dispatch("userLogin", payload);
      this.inputEmail = "";
      this.inputPassword = "";
    },
    changePage(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>

</style>