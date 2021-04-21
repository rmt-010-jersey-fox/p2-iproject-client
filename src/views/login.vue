<template>
  <div>
    <ul>
      <li>
        <h1>What is MangAPP ?</h1>
        <hr />
        <p>
          MangAPP is simply a final project for phase 2 of hacktiv8. here you
          can try to search and read your favorite manga. enjoy!
        </p>
      </li>
      <li>
        <h1>Sign In</h1>
        <input v-model="inputEmail" type="text" required placeholder="Email" />
        <input
          v-model="inputPassword"
          type="password"
          required
          placeholder="Password"
        />
        <a class="login" href="#" @click.prevent="userLogin">Login</a>
        <a class="forget" href="#" @click.prevent="changePage"
          >dont have an account?</a
        >
      </li>
    </ul>
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
    changePage() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Quicksand", sans-serif;
}

ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
}
ul li {
  list-style: none;
  position: relative;
  width: 50%;
  padding: 40px 30px;
  box-sizing: border-box;
  float: left;
}
ul li:nth-of-type(1) {
  background: rgba(63, 81, 181, 0.7);
  color: #fff;
  height: 90%;
  margin-top: 3%;
}
ul li h1 {
  font-size: 27px;
  margin-bottom: 10px;
}
ul li p {
  line-height: 23px;
  margin-bottom: 20px;
}
ul li a {
  position: relative;
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
}
ul li:nth-of-type(1) a {
  background: #ff5722;
}
/******* Li nth-child 2**********/
ul li:nth-of-type(2) {
  background: #fff;
  height: 100%;
}
ul li input {
  position: relative;
  width: 100%;
  font-size: 20px;
  border: 2px solid #ccc;
  outline: none;
  border-radius: 30px;
  margin: 15px 0;
  padding: 10px;
  box-sizing: border-box;
}
ul li input:focus,
ul li input:valid {
  border-color: #3f51b5;
}
ul li a.login {
  display: block;
  width: 100%;
  background: #3f51b5;
  box-sizing: border-box;
  text-align: center;
  margin: 12px 0;
}
ul li a.login:hover {
  background: #ff5722;
}
ul li a.forget {
  color: #3f51b5;
}
ul li a.forget:hover {
  text-decoration: underline;
}
</style>
