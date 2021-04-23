<template>
  <div>
   
    <carousel>
       <div 
      v-for="artwork in artworks"
      :key="artwork.id">
        <div class="card" >
          <h5 class="card-title" v-text="artwork.title"></h5>
          <img :src="`https://www.artic.edu/iiif/2/${artwork.image}/full/843,/0/default.jpg`">
          <div class="card-body">
            <h6 class="card-title" > Artist </h6>
            <p class="card-text" v-text="artwork.artist"></p>
          </div>
        </div>
      </div>
    </carousel>

  
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  components: { carousel },
  props: ['artworks']
}
</script>

<style>

</style>