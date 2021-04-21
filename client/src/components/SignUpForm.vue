<template>
  <div>
    <h4 class="card-title text-center">Sign Up</h4>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="mb-3">
        <label class="form-label">Your Private Room Name</label>
        <input type="text" class="form-control" v-model="roomName" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      roomName: ""
    };
  },
  methods: {
    async register() {
      console.log(this.email, this.password, this.username);
      try {
        const data = await this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
          username: this.username,
          roomName: this.roomName
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
