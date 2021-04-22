<template>
  <div id="app">
     <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <router-link to="/" class="navbar-brand" href="#" style="margin-top:0px; padding-top:0px">
            <img src="./assets/logo.png" height="50" alt="">
            <strong>SewaMobil.com</strong>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button v-show="!checkLogin" @click.prevent="gotoRegister" type="button" class="btn btn-primary" style="background-color: #0770cd !important">Register</button>
            <button v-show="checkLogin" @click.prevent="logout" type="button" class="btn btn-primary">Logout</button>
            <button v-show="!checkLogin" @click.prevent="login" type="button" class="btn btn-light">Login</button>
            <form v-show="!checkLogin" class="form-inline" action="/action_page.php" style="margin-right:10px">
              <label for="email">Email:</label>
              <input v-model="email" type="email" id="email" placeholder="Enter email" name="email">
              <label for="pwd">Password:</label>
              <input v-model="password" type="password" id="pwd" placeholder="Enter password" name="pswd" style="margin-right:10px !important">
            </form>
        </div>
        <p>Anda memiliki usaha rental mobil ? Bergabunglah bersama kami !<a style="color: blue; margin-left: 3px;">Click disini untuk bergabung</a></p>
    </nav>
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import axios from '../api/axios'
import HFooter from 'vue-hacktiv-footer'
import Swal from 'sweetalert2'
export default {
  name: 'App',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: { HFooter },
  computed: {
    checkLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: 'login',
        data: { email: this.email, password: this.password }
      })
        .then(data => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login successfully',
            showConfirmButton: false,
            timer: 1500
          })
          this.$store.commit('setLogin', true)
          localStorage.setItem('access_token', data.data.access_token)
          this.email = ''
          this.password = ''
          this.$router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: err
          })
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      this.$store.commit('setLogin', false)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logged out successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.$router.push('/')
    },
    gotoRegister () {
      this.$router.push('/register')
    }
  },
  created () {
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$store.commit('setLogin', true)
    }
  }

}
</script>

<style>
/* label login */

.form-inline label {
  margin: 5px 10px 5px 5px;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0px;
  padding: 5px;
  border: 1px solid #ddd;
}

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}

nav {
    position: fixed !important;
    top: 0 !important;
    width: 100%;
    height: 55px;
}
nav a {
  margin-left: 250px;
}
nav .btn-primary {
    position: fixed;
    right: 250px;
}
nav .btn-light {
    position: fixed;
    right: 350px;
    background-color: #f6f6f6;
}
nav form {
  position: fixed;
  right: 410px;
}
nav p {
    background-color: #f6f6f6;
      box-shadow: 0px 4px 10px rgb(3 18 26 / 15%);
    width: 100%;
    position: fixed;
    left: 0;
    top: 52px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
}
nav p a{
    color: blue;
}
.search-car {
    margin-top: 20px;
    margin-left: 250px;
    margin-right: 250px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(112, 112, 112, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}
.tab-pane {
    padding: 30px;
}
.form-login input {
    width: 100%;
}
.form-login {
    padding-left: 10px;
    padding-right: 10px;
}
.modalfooter{
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 10px;
    padding-bottom: 30px;
}

.register {
  padding-top: 50px;
  background-color: #1ba0e3;
  padding-left: 250px;
  padding-right: 250px;
}

.register-bottom {
    background-color: #e6eaed;
}

/* FORM */

  .col-50 {
    -ms-flex:   25%; /* IE10 */
    flex: 25%;
  }

  .col-75 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }

  .col-50,
  .col-75 {
    padding: 0 16px;
  }

  .container, .set-color {
    background-color: #f2f2f2;
    padding: 10px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 7px;
  }

  .container input[type=text] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .container input[type=password] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
    .container select {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .container label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }

  .container .btn {
    background-color: #0770cd;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .container .btn:hover {
    background-color: #45a049;
  }

  .container a {
    color: #2196F3;
  }

  .container hr {
    border: 1px solid lightgrey;
  }

  .container span.price {
    float: right;
    color: grey;
  }

  /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
  @media (max-width: 800px) {
    .row {
      flex-direction: column-reverse;
    }
  }

.register-toptext {
    background-color: #1ba0e3;
}

.col img {
    width: 80px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.reward {
    margin-top: 50px;
}
</style>
