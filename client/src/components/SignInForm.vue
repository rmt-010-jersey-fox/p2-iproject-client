<template>
  <div>
    <h4 class="card-title text-center mb-1">Sign In</h4>
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
      <button type="submit" class="btn btn-outline-dark orn">
        Sign In
      </button>
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
        const data = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        });
        console.log(data);
        this.$router
          .push({
            path: `/dashboard/profile/${localStorage.username}`
          })
          .catch(() => {});
        const payload = {
          sender: localStorage.username,
          avatarUrl: localStorage.avatarUrl
        };
        this.$socket.emit("loginUser", payload);
      } catch (error) {
        const msg = error.response.data.message;
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: msg
        });
        console.log(error);
      } finally {
        this.email = "";
        this.password = "";
      }
    }
  }
};
</script>

<style></style>
