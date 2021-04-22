<template>
  <b-container class="mt-5">
      <b-row>
        <b-col cols="4" v-for="(data, id) in products" :key="id">
            <card class="me-5">
              <img slot="image" class="card-img-top" :src="data.imageUrl" alt="Card image cap">
              <div>
                <h4 class="card-title">{{data.name}}</h4>
                <p class="card-text">Stock: {{data.stock}}</p>
                <p class="card-text">Price: {{data.price}}</p>
                <p class="card-text">Location: {{data.Location.name}}</p>
              </div>
            </card>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import {BCarouselSlide, BCarousel, BRow, BCol, BContainer} from 'bootstrap-vue'
import { Navbar, DropDown, Card, Button, Modal} from '@/components'
import { mapState } from 'vuex'
export default {
name: 'News', 
}
</script>

<style>

</style>