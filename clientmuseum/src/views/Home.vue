<template>
  <div class="home">
  
    <Carousel 
      :artworks="artworks"
    ></Carousel>
    <HFooter></HFooter>
  </div>
  
</template>

<script>

import Carousel from '../components/carousel.vue'
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'Home',
  components: {
    Carousel,
    HFooter
  },
  computed:{
    artworks(){
      return this.$store.state.artworks
    } 
  },
  created (){
    this.$store.dispatch('fecthArt')
  }
}
</script>


