<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/bg3.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
            <loginPanel v-if="page === 'login'"></loginPanel>
            <registerPanel v-else-if="page === 'register'"></registerPanel>
        </div>
      </div>
    </div>
    <!-- <main-footer></main-footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, FormGroupInput, loginPanel, registerPanel } from '@/components';
import { mapState } from 'vuex';
// import MainFooter from '@/layout/MainFooter';

export default {
  name: 'LoginPage',
  components: {
    // MainFooter,
    loginPanel,
    registerPanel,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  computed: {
      ...mapState(["page"])
  }
}
</script>
