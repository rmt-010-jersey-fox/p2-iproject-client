<template>
    <div>
      <div class="responsive-header">
	    <div class="mh-head first Sticky">
		  <span class="mh-btns-left">
		  	<a class="" href="#menu"><i class="fa fa-align-justify"></i></a>
		  </span>
		  <span class="mh-text">
		  	<!-- <a  title=""><img src="https://www.flaticon.com/svg/vstatic/svg/2991/2991606.svg?token=exp=1618756525~hmac=d182e51a2ad4fc031341c09733e2b195" alt="" width="1000"></a> -->
		  </span>
		  <span class="mh-btns-right">
		  	<a class="fa fa-sliders" href="#shoppingbag"></a>
		  </span>
		</div>
		<!-- <div class="mh-head second">
			<form class="mh-form">
				<input placeholder="search" />
				<a href="#/" class="fa fa-search"></a>
			</form>
		</div> -->
	  </div><!-- responsive header -->
	  <div class="topbar stick">
		<div class="logo" v-if="isLogin">
			<a class="img-nav" @click.prevent="$router.replace({ name: 'ThreadList' }).catch(()=>{})" ><img src="https://image.flaticon.com/icons/png/128/2991/2991606.png" alt=""></a>
		</div>
		<div class="logo" v-if="!isLogin">
			<a class="img-nav" @click.prevent="$router.replace({ name: 'Login' }).catch(()=>{})" ><img src="https://image.flaticon.com/icons/png/128/2991/2991606.png" alt=""></a>
		</div>
		<div class="top-area">
			<div class="user-img" v-if="!isLogin">
				<button class="btn btn-primary" @click.prevent="$router.replace({ name: 'Login' })">Login</button> |  <button class="btn btn-primary" @click.prevent="$router.replace({ name: 'Register' })">Register</button>
			</div>
			<div class="user-img" v-if="isLogin">
				<h5 v-if="user.fullname">{{ user.fullname }}</h5>
				<h5 v-if="!user.fullname">Welcome</h5>
				<!-- <div v-if="user.image"> -->
					<img :src="user.image" v-if="user.image" alt="" width="60">
					<img src="https://mediate.co.id/wp-content/uploads/2021/01/user-icon-600x600.jpg" v-if="!user.image" alt="" width="60">
				<!-- </div> -->
				<!-- <div v-if="!user.image">
					<img src="https://mediate.co.id/wp-content/uploads/2021/01/user-icon-600x600.jpg" alt="" width="60">
				</div> -->
				<span class="status f-online"></span>
				<div class="user-setting">
					<!-- <span class="seting-title">User setting <a href="#" title="">see all</a></span> -->
					<ul class="log-out">
					    <!-- <li><a @click.prevent="$router.replace({ name: 'Profile' }).catch(()=>{})" title=""><i class="fa fa-user"></i> view profile</a></li>
					    <li><a href="setting.html" title=""><i class="fa fa-pencil-alt"></i>edit profile</a></li> -->
					    <li><a @click.prevent="logout" title=""><i class="fa fa-power-off"></i>log out</a></li>
					</ul>
				</div>
			</div>
			<span class="fa fa-settings main-menu" data-ripple=""></span>
		</div>
	  </div><!-- topbar -->
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
	  ...mapState(['isLogin', 'user'])
  },
  methods: {
	  logout() {
		  Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Logout',
            showConfirmButton: false,
            timer: 1500
          })
		  this.$store.commit('logout')
		  this.$router.replace({ name: 'Login' })
	  }
  }
}
</script>

<style>
.img-nav {
	max-width: 30%;
}
</style>
