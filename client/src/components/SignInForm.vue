<template>
  <div>
    <h4 class="card-title text-center">Login</h4>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        let data = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        });
        console.log(data);
        this.$router.push({ name: "Dashboard" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
