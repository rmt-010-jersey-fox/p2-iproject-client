<template>
  <div class="navigation-wrap bg-light start-header start-style ">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-md navbar-light navbar-inverse navbar-fixed-top">
            
              <a class="navbar-brand" href="https://front.codes/" target="_blank"><img src="https://motionarray.imgix.net/preview-328095-gNWCObG9we-high_0004.jpg?w=660&q=60&fit=max&auto=format" alt=""></a>	
              
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto py-4 py-md-0">
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                     @click.prevent="changePage('/')"
                    >Home</a>
                  </li>


                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                    @click.prevent="changePage('/action')"
                    >What Can We Do</a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <a class="dropdown-item" href="#">Another action</a>
                    </div>
                  </li>
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a
                     class="nav-link"
                     @click.prevent="changePage('/comment')"
                    >Comment</a>
                  </li>
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a 
                     class="nav-link"
                     @click.prevent="changePage('/register')"
                    >Sign Up</a>
                  </li>
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a 
                     class="nav-link" 
                     @click.prevent="changePage('/login')"
                    >Sign In</a>
                  </li>
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a class="nav-link" @click.prevent="logout" >Logout</a>
                  </li>
                </ul>
              </div>
              
            </nav>		
          </div>
        </div>
      </div>
    <climate-clock></climate-clock>
    </div>
</template>

<script>
export default {
 name: 'Navbar',
 methods: {
    logout() {
        localStorage.clear()
        this.$router.push('/login')
    },
    changePage(val) {
      this.$router.push(val)
    }
  },
  computed: {
    isLogin() {
        console.log(this.$store.isLogin)
      return this.$store.isLogin
    }
  }
}
</script>


<style>

</style>