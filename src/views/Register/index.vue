<template>
  <div>
    <v-container class="mt-6">
      <v-row align="center" justify="center">
        <v-col sm="6">
          <v-container>
            <v-card color="white" rounded="xl" flat class="mt-6 pa-6">
              <h1 class="primary--text text-center my-5">Daftar</h1>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  label="Username"
                  type="text"
                  v-model="username"
                  :rules="usernameRules"
                  prepend-inner-icon="mdi-format-letter-case"
                  outlined
                  rounded
                  dense
                  required
                >
                </v-text-field>
                <v-text-field
                  label="E-mail"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  prepend-inner-icon="mdi-at"
                  outlined
                  rounded
                  dense
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
                  dense
                >
                </v-text-field>
                <v-btn
                  dark
                  rounded
                  depressed
                  block
                  color="primary"
                  @click.prevent="register"
                  >Daftar</v-btn
                >
                <h4 class="grey--text mt-5">
                  Sudah Punya Akun ?
                  <span
                    class="primary--text"
                    id="loginLink"
                    @click.prevent="toLoginPage"
                    >Masuk</span
                  >
                </h4>
              </v-form>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      loading: false,
      selection: 1,
      valid: true,
      email: "",
      password: "",
      username: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => v.length > 5 || "Password at least 6 characters required",
      ],
      usernameRules: [(v) => !!v || "Username is required"],
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    register() {
      // this.$store.dispatch('changeIsLogin')
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        username: this.username,
      });
      this.$refs.form.validate();
    },
    toLoginPage() {
      this.$router.push("/login").catch(() => {});
    },
  },
};
</script>

<style>
#loginLink {
  cursor: pointer;
}
</style>
