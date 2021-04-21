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
                <h4 class="grey--text mt-5">
                  Engga Punya Akun ?
                  <span
                    class="primary--text"
                    id="registerLink"
                    @click.prevent="toRegisterPage"
                    >Daftar</span
                  >
                </h4>
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
export default {
  name: "Login",
  data() {
    return {
      loading: false,
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
  },
};
</script>

<style>
#registerLink {
  cursor: pointer;
}
</style>
