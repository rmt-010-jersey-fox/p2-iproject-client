<template>
  <div class="container">
    <div>
      <div class="form-register">
        <form>
          <hr />
          <h1 class="h3 mb-3 fw-normal">Join Us Now !</h1>
          <br />
          <label for="name">Your name</label><br />
          <input
            type="text"
            v-model="name"
            class="form-control"
            placeholder="Udin"
            required
            autofocus
          /><br />
          <label for="email">Email address</label><br />
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="udin@mail.com"
            required
            autofocus
          /><br />
          <label for="password">Password</label><br />
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
            required
          /><br />
          <button
            class="w-100 btn btn-lg btn-primary"
            id="btn-register"
            type="submit"
          >
            Sign Up</button
          ><br />
          <hr />
        </form>
        <p style="color: black">
          Have an Account ? <router-link class="btn btn-info" to="/login">Login Now</router-link>
        </p>
      </div>
    </div>
    <!-- <div class="col-md-7"> -->
      <!-- <img src="/resouces/undraw_Updated_resume_re_q1or.svg" alt="" width="500" height="500"> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
    data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
      signup () {
        this.$store.dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          router: this.$router
          })
        },
  },
};
</script>

<style>
</style>
