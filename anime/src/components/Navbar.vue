<template>
  <nav class="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation" style="background: linear-gradient(
    90deg,
    rgb(176, 118, 243) 0%,
    rgb(218, 126, 241) 35%
  )">
      <div class="navbar-brand">
        <div class="navbar-item">
          <router-link class="navbar-item title is-4 has-text-dark" to="/">Anime News</router-link>
        </div>

        <a role="button" @click.prevent= "active" :class= "class1" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" :class= "class2">
        <div class="navbar-start">
          <div class="buttons">
          <router-link class="button is-large is-light" v-if="isLogin" to="/addAnime">
                <span class="icon is-large">
                  <i class="fas fa-heart"></i>
                </span>
          </router-link>
          <router-link class="button is-large is-light" v-if="isLogin" to="/quotes">
              <span>
                    <i class="fas fa-paw"></i>
                </span>
          </router-link>
          </div>
        </div>

        <div class="navbar-end">
          <h6 class="navbar-item is-italic has-text-centered" v-if="isLogin">Welcome, Have a nice day! 😍 </h6>
          <div class="navbar-item">
            <div class="buttons">
              <button class="navbar-item button is-danger" v-if="isLogin" @click.prevent="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      class1: 'navbar-burger burger',
      class2: 'navbar-menu',
      name: `${localStorage.getItem('username')}`
    }
  },
  methods: {
    active () {
      if (this.class1 === 'navbar-burger burger') {
        this.class1 = 'navbar-burger burger is-active'
        this.class2 = 'navbar-menu is-active'
      } else {
        this.class1 = 'navbar-burger burger'
        this.class2 = 'navbar-menu'
      }
    },
    logout () {
      this.$swal.fire({
        title: 'Are you sure to logout?',
        text: "After this, you won't allowed to access this site!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire(
            'logging out',
            'Thank you admin, have a nice day',
            'success'
          )
          this.$store.commit('CHANGE_IS_LOGIN', false)
          localStorage.clear()
          this.$router.push('/login')
        }
      })
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('CHANGE_IS_LOGIN', true)
    } else {
      this.$store.commit('CHANGE_IS_LOGIN', false)
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
