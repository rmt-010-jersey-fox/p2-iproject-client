<template>
    <div id="app">
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-5">
        <div class="container">
            <a class="navbar-brand" >
              <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="" width="70" height="45">
            </a>
            <router-link class="navbar-brand" to="/" >Open Shop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class=navbar-nav>
                    <li class="nav-item">
                        <router-link class="nav-link btn-success text-white fs-5" to="/products" v-if="$route.name != 'Products'">All Products</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link btn-info text-dark me-3 fs-5" to="/carts" v-if="isLogin && $route.name != 'Carts'">My Cart</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link class="nav-link btn-info text-dark me-3 fs-5" to="/transactionHistories" v-if="isLogin && $route.name != 'TransactionHistory'">Transaction History</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn-info text-dark fs-5" to="/login" v-if="!isLogin && ($route.name == 'Home' || $route.name == 'Register' || $route.name == 'Products')">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link btn-info text-dark fs-5" to="/register" v-if="!isLogin && $route.name == 'Login'">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="btn nav-link bg-danger text-white fs-5" @click.prevent="logout" v-if="isLogin">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- AKHIR NAVBAR -->
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
