<template>
    <nav class="pcoded-navbar">
        <div class="sidebar_toggle"><a href="#"><i class="icon-close icons"></i></a></div>
        <div class="pcoded-inner-navbar main-menu">
            <div class="">
                <div class="main-menu-header">
                    <img class="img-80 img-radius" src="assets/images/avatar-8.jpeg" alt="User-Profile-Image">
                    <div class="user-details">
                        <span id="more-details">{{ email }}</span>
                    </div>
                </div>
            </div>
            <ul class="pcoded-item pcoded-left-item">
                <li class="">
                    <a href="/" class="waves-effect waves-dark">
                        <span class="pcoded-micon"><i class="ti-home"></i><b>D</b></span>
                        <span class="pcoded-mtext">Dashboard</span>
                        <span class="pcoded-mcaret"></span>
                    </a>
                </li>
            </ul>
            <div class="pcoded-navigation-label"></div>
            <ul class="pcoded-item pcoded-left-item">
                <li class="pcoded-hasmenu">
                    <a href="javascript:void(0)" class="waves-effect waves-dark">
                        <span class="pcoded-micon"><i class="fa fa-cubes" aria-hidden="true"></i><b>MD</b></span>
                        <span class="pcoded-mtext">Master Data</span>
                        <span class="pcoded-mcaret"></span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li class=" ">
                            <a href="/location" class="waves-effect waves-dark">
                                <span class="pcoded-micon"><i class="ti-angle-right"></i></span>
                                <span class="pcoded-mtext">Location</span>
                                <span class="pcoded-mcaret"></span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="pcoded-item pcoded-left-item">
                <li class="pcoded-hasmenu">
                    <a href="javascript:void(0)" class="waves-effect waves-dark">
                        <span class="pcoded-micon"><i class="fa fa-cogs" aria-hidden="true"></i><b>UE</b></span>
                        <span class="pcoded-mtext">UI Elements</span>
                        <span class="pcoded-mcaret"></span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li class=" ">
                            <a href="/banner" class="waves-effect waves-dark">
                                <span class="pcoded-micon"><i class="ti-angle-right"></i></span>
                                <span class="pcoded-mtext">Banner Materials</span>
                                <span class="pcoded-mcaret"></span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="pcoded-item pcoded-left-item">
                <li class="">
                    <a href="/" class="waves-effect waves-dark">
                        <span class="pcoded-micon"><i class="ti-layers"></i><b>PD</b></span>
                        <span class="pcoded-mtext">Products</span>
                        <span class="pcoded-mcaret"></span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
import store from '../store'
export default {
  name: 'Sidebar',
  data () {
    return {
      email: localStorage.email
    }
  }
}
</script>
