<template>
  <div>
    <v-container class="mt-6">
      <v-card color="white" rounded="xl" flat class="mt-6 pa-6">
        <v-row align="center" justify="center">
          <v-col>
            <v-container>
              <h1 class="primary--text text-center my-5">Masuk</h1>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  label="E-mail"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  prepend-inner-icon="mdi-at"
                  outlined
                  rounded
                  required
                >
                </v-text-field>
                <v-text-field
                  label="Password"
                  type="password"
                  :rules="passwordRules"
                  v-model="password"
                  prepend-inner-icon="mdi-key"
                  outlined
                  rounded
                  required
                >
                </v-text-field>
                <v-btn
                  dark
                  rounded
                  depressed
                  block
                  color="primary"
                  @click.prevent="login"
                  >Masuk</v-btn
                >
                <v-row justify="space-around" class="mt-4 mb-2">
                  <h4 class="grey--text mt-5">
                    <span
                      class="primary--text mr-3"
                      id="registerLink"
                      @click.prevent="toRegisterPage"
                      >Daftar</span
                    >
                    Atau Login Dengan
                  </h4>
                  <GoogleLogin
                    :params="params"
                    :renderParams="renderParams"
                    :onSuccess="onSuccess"
                  >
                  </GoogleLogin>
                </v-row>
              </v-form>
            </v-container>
          </v-col>
          <v-col>
            <v-img
              height="500"
              width="500"
              class="mr-2"
              src="@/assets/login.svg"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import Swal from "sweetalert2";
import axios from "@/api/axios";
export default {
  name: "Login",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      loading: false,
      params: {
        client_id:
          "550626435415-63qc3rtgga5d5umbju7vnoplpp9n776g.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
      selection: 1,
      valid: true,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => v.length > 5 || "Password at least 6 characters required",
      ],
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    login() {
      // this.$store.dispatch('changeIsLogin')
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.$refs.form.validate();
      this.$socket.emit("userLogin", { email: this.email });
    },
    toRegisterPage() {
      this.$router.push("/register").catch(() => {});
    },
    onSuccess(googleUser) {
      // This only gets the user information: id, name, imageUrl and email
      const profile = googleUser.getBasicProfile();
      const idToken = googleUser.getAuthResponse().id_token;
      axios({
        method: "POST",
        url: "/googleLogin",
        data: {
          idToken,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("currentUserId", data.id);
          this.$store.commit("CHECK_IS_LOGIN");
          this.$store.dispatch("changeCurrentUser");
          this.$router.push("/dashboard");
          Swal.fire({
            title: `Welcome back, ${profile.getEmail()} !`,
            timer: 3000,
            icon: "success",
            showConfirmButton: false,
            toast: true,
            position: "bottom-end",
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style>
#registerLink {
  cursor: pointer;
}
</style>
