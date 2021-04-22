<template>
    <nav class="navbar header-navbar pcoded-header">
        <div class="navbar-wrapper">
            <div class="navbar-logo">
                <a class="mobile-menu waves-effect waves-light" id="mobile-collapse" href="#!">
                    <i class="ti-menu"></i>
                </a>
                <a href="#">
                    <img src="assets/images/kuy2.png" alt="" width="100" height="auto" />

                </a>
                <a class="mobile-options waves-effect waves-light">
                    <i class="ti-more"></i>
                </a>
            </div>
            <div class="navbar-container container-fluid">
                <ul class="nav-left">
                    <li>
                        <div class="sidebar_toggle"><a href="javascript:void(0)"><i class="ti-menu"></i></a></div>
                    </li>
                    <li>
                        <a href="#!" onclick="javascript:toggleFullScreen()" class="waves-effect waves-light">
                            <i class="ti-fullscreen"></i>
                        </a>
                    </li>
                </ul>
                <ul class="nav-right">
                    <li class="user-profile header-notification">
                        <a href="#!" class="waves-effect waves-light">
                            <img src="assets/images/avatar-8.jpeg" class="img-radius" alt="User-Profile-Image">
                            <span>{{ email }}</span>
                            <i class="ti-angle-down"></i>
                        </a>
                        <ul class="show-notification profile-notification">
                            <li class="waves-effect waves-light">
                                <a href="/logout">
                                    <i class="ti-layout-sidebar-left"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      email: localStorage.email
    }
  }
}
</script>
<style scoped>
    a {
        text-decoration: none
    }
</style>
