<template>
  <section>
    <form class="px-6 pt-6 pb-3" @submit.prevent="login">
      <div class="field px-6">
        <label class="label">Email</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="email"
            v-model="email"
            placeholder="conto@mail.com"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field px-6">
        <label class="label">Password</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="password"
            v-model="password"
            placeholder="********"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered px-6">
        <div class="control">
          <button class="button is-link" id="submit-login">Submit</button>
        </div>
        <div class="control">
          <button
            class="button is-link is-light"
            @click.prevent="changePage('/')"
            id="cancel-login"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
    <h3 class="pb-3">
      <center><strong>-----ATAU-----</strong></center>
    </h3>
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button
          v-google-signin-button="clientId"
          class="button is-info is-outlined"
        >
          <span class="icon is-small">
            <i class="fab fa-google"></i>
          </span>
          <span>Masuk dengan Google</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FormLogin",
    data() {
      return {
        email: "",
        password: "",
        clientId:
          "373429152688-q1p8qs00tri1d1jmhc00cujmgk4kbkv1.apps.googleusercontent.com",
      };
    },
    methods: {
      login() {
        let data = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("login", data);
      },
      changePage(path) {
        this.$router.push(path);
      },
      OnGoogleAuthSuccess(idToken) {
        this.$store.dispatch("googleLogin", idToken);
      },
      OnGoogleAuthFail(error) {
        console.log(error);
      },
    },
  };
</script>

<style></style>
