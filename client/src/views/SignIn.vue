<template>
  <div class="content">
    <div class="h-100 d-flex justify-content-center align-items-center">
      <div class="card mb-3 h-75 w-75">
        <div class="row g-0 h-100">
          <div class="col-md-8 banner">
            <div class="card-body text-white">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="col-md-4 position-relative">
            <div class="d-flex justify-content-end m-2">
              <button
                @click="landingPage"
                class="btn btn-outline-dark rounded-circle"
              >
                X
              </button>
            </div>
            <div class="card-body m-4 p-0 font-monospace">
              <div v-if="stateSign">
                <SignInForm></SignInForm><br />
                <p>
                  Dont have an account?
                  <a @click.prevent="stateSign = !stateSign" href=""
                    >sign up.</a
                  >
                </p>
              </div>
              <div v-else>
                <SignUpForm></SignUpForm><br />
                <p>
                  Already have account?
                  <a @click.prevent="stateSign = !stateSign" href=""
                    >sign in.</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
export default {
  name: "SignIn",
  data() {
    return {
      stateSign: false
    };
  },
  components: {
    SignInForm,
    SignUpForm
  },
  methods: {
    landingPage() {
      this.$router.replace("/");
    }
  }
};
</script>

<style scoped>
.content {
  height: 100vh;
  background-color: #77602544;
}
.banner {
  background-image: url("../assets/landing-page.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
