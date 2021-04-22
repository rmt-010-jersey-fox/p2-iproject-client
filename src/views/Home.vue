<template>
  <div id="Home">
    <section>
      <div class="gap2 gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row merged20" id="page-contents">
  <!-- <HFooter/> -->
                <Aside/>
                <router-view/>
              </div>	
            </div>
          </div>
        </div>
      </div>	
    </section>
  </div>
</template>

<script>
import Aside from '../components/Aside'
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'Home',
  components: { Aside, HFooter },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('changeIsLogin', true)
      this.$store.dispatch('fetchEvents')
      this.$store.dispatch('fetchThreads')
      this.$store.dispatch('myThreads')
      this.$store.dispatch('fetchPopularGames')
      // this.$store.dispatch('getUser')
    } else {
      this.$store.dispatch('changeIsLogin', false)
    }
  }
}
</script>

<style>

</style>