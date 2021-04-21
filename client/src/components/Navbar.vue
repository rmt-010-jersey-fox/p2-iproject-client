<template>
  <nav class="navbar navbar-dark bg-dark" style="height: 6rem;">
    <div class="container-fluid">
      <div class="col-4">
        <router-link class="navbar-brand" to="/" >gammingDB</router-link>
      </div>
      <div class="col-4">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </div>
      <div class="col-4">
        <div class="container">
          <div class="item">
            <button class="btn btn-outline-light item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">SignIn</button>
          </div>
          <!-- User Icon -->
          <div class="item pt-1 dropstart">
            <i class="fas fa-user-circle" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <div>
                  <a class="dropdown-item" href="#"><i class="fas fa-user-circle icon"></i> Profile</a>
                </div>
              </li>
              <li>
                <a class="dropdown-item" @click.prevent="wishlist"><i class="fas fa-heart icon"></i> Wishlist</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="fas fa-sign-in-alt icon"></i> SignOut</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header" style="background-color: #8C0000;">
            <h5 class="modal-title" id="staticBackdropLabel" style="color: white;">Signin</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-5">
                <div class="row sign">or connect with</div>
                <div class="col d-flex justify-content-center mt-3"><button type="button" class="btn btn-success">GOOGLE</button></div>
                <div class="row sign mt-2">or signup manually here</div>
              </div>
              <div class="col-7">
                <form>
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Email">
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Password">
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="background-color: #8C0000;">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">OK</button>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  beforeCreate () {
    if (localStorage.access_token) this.$store.commit('setLogin', true)
    else this.$store.commit('setLogin', false)
  },
  methods: {
    wishlist () {
      console.log('click')
      this.$router.push({ name: 'Wishlist' })
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style scoped>
  .sign {
    justify-content: center;
    font-size: smaller;
  }
</style>
