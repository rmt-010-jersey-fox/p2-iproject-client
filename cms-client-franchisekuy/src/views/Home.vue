<template>
   <div id="pcoded" class="pcoded">
      <div class="pcoded-overlay-box"></div>
      <div class="pcoded-container navbar-wrapper">
        <navbar></navbar>
        <div class="pcoded-main-container">
            <div class="pcoded-wrapper">
                <sidebar></sidebar>
                <div class="pcoded-content">
                    <!-- Page-header start -->
                    <div class="page-header">
                        <div class="page-block">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <div class="page-header-title">
                                        <h5 class="m-b-10">{{title}}</h5>
                                        <p class="m-b-0">Manage your {{title}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Page-header end -->
                    <router-view></router-view>
                        <!-- Main-body end -->

                        <div id="styleSelector">

                        </div>
                    </div>
                </div>
            </div>
        </div>
      <HFooter></HFooter>
      </div>
</template>

<script>
// @ is an alias to /src

import sidebar from '@/components/Sidebar.vue'
import navbar from '@/components/Navbar.vue'
import { mapState } from 'vuex'
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'Home',
  components: {
    sidebar,
    navbar,
    HFooter
  },
  mounted () {
 
  },
  created () {
    if (localStorage.getItem('reloaded') === 'false' || !localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', true)
      location.reload()
    }
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>
