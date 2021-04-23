<template>
    <section class="login-block">
        <!-- Container-fluid starts -->
        <div class="container">
            <div class="row">
                <loginPanel></loginPanel>
            </div>
            <!-- end of row -->
        </div>
        <!-- end of container-fluid -->
    </section>
</template>
<script>
import loginPanel from '../components/LoginPanel'
export default {
  name: 'Login',
  components: {
    loginPanel
  },
  created () {
    localStorage.setItem('reloaded', false)
  }
}
</script>
<style scoped>

</style>
