<template>
  <div>
  <navbar
          :type="type"
          :transparent="false"
          menu-classes="ml-auto"
          position="relative"
          class="z-index-high"
          >
       <template slot="navbar-menu">
         <drop-down tag="li" class="nav-item" title="Location">
          <a class="dropdown-item" href="#" v-for="(data, id) in locations" :key="id" @click.prevent="fetchProduct(data.id)">{{ data.name }}</a>
          </drop-down>
       </template>
       <a class="navbar-brand" href="#" @click.prevent="fetchProduct()">
           <img src="img/kuy2.png" alt="franchiseKuy" width="150" height="auto" />
       </a>
       <template slot="navbar-menu" v-if="isLoggedIn">
         <li class="nav-item">
           <a class="nav-link" href="#" @click.prevent="modals.transaction = true">
             <i class="now-ui-icons files_box"></i>
             <p>Transactions</p>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#" @click.prevent="modals.wishlist = true">
             <i class="now-ui-icons ui-2_favourite-28"></i>
             <p>Wishlist</p>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#" @click.prevent="modals.carts = true">
             <i class="now-ui-icons shopping_cart-simple"></i>
             <p>Carts</p>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#" @click.prevent="">
             <i class="now-ui-icons education_atom"></i>
             <p>News</p>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#" @click.prevent="logout()">
             <i class="now-ui-icons ui-1_settings-gear-63"></i>
             <p>Logout</p>
           </a>
         </li>
        </template>
       <template slot="navbar-menu" v-else>
         <li class="nav-item">
           <a class="nav-link" href="/login">
             <i class="now-ui-icons users_circle-08"></i>
             <p>Login</p>
           </a>
         </li>
        </template>
   </navbar>
   <b-container v-if="isFiltered === false">
     <b-row>
       <b-col cols="12">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide v-for="(data, id) in banners" :key="id">
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                :src="data.imageUrl"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
       </b-col>
     </b-row>
   </b-container>
   <!-- items -->
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
                  <Button type="primary" @click.prevent="addWishlist(data.id)">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                    Add to wishlist
                  </Button>
                  <Button type="primary" @click.prevent="addCart(data.id )">
                    <i class="now-ui-icons shopping_cart-simple"></i>
                    Add to Cart
                  </Button>
              </div>
            </card>
        </b-col>
      </b-row>
    </b-container>
    <!-- modal shopping cart -->
    <modal :show.sync="modals.carts" headerClasses="justify-content-center">
      <h4 slot="header" class="title title-up">Shopping Cart</h4>
      <b-container>
        <b-row :set="subtotal=0">
          <b-col cols="12" v-for="(data, id) in cart" :key="id" :set="subtotal+=(data.quantity*data.Product.price)">
             <card>
                <b-container fluid>
                  <b-row>
                    <b-col cols="4">
                      <img slot="image" class="card-img-right" :src="data.Product.imageUrl" alt="Card image cap">
                    </b-col>
                    <b-col cols="8">
                        <p class="card-title">{{data.Product.name}}</p>
                        <p class="card-text">Quantity:
                          <Button type="primary" size="sm" @click.prevent="editCart(data.id, data.quantity-1)">
                            -
                          </Button>
                          {{data.quantity}}
                          <Button type="primary" size="sm" @click.prevent="editCart(data.id, data.quantity+1)">
                            +
                          </Button>
                        </p>
                        <p class="card-text">Price: Rp {{data.quantity * data.Product.price}}</p>
                          <Button type="primary" size="sm" @click.prevent="removeCart(data.id)">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                            Remove
                          </Button>
                    </b-col>
                  </b-row>
                </b-container>
              </card>
          </b-col>
          <div slot="footer" class="card-footer text-right mb-2" v-if="cart.length>0">
              <p class="mr-4 pr-4">
              Subtotal : {{subtotal}}
              </p>
            </div>
        </b-row>
      </b-container>
      <template slot="footer">
        <Button type="danger" @click.native="modals.carts = false">Close</Button>
        <Button type="success" @click.prevent="checkout()" v-if="cart.length > 0">Checkout</Button>
      </template>
    </modal>
    <!-- modal wishlist -->
    <modal :show.sync="modals.wishlist" headerClasses="justify-content-center">
      <h4 slot="header" class="title title-up">Wishlist</h4>
      <b-container>
        <b-row>
          <b-col cols="12" v-for="(data, id) in wishlist" :key="id">
             <card>
                <b-container fluid>
                  <b-row>
                    <b-col cols="4">
                      <img slot="image" class="card-img-right" :src="data.Product.imageUrl" alt="Card image cap">
                    </b-col>
                    <b-col cols="8">
                        <p class="card-title">{{ data.Product.name }}</p>
                        <p class="card-text">Stock: {{ data.Product.stock }}
                        </p>
                        <p class="card-text">Price: Rp {{ data.Product.price }}</p>
                          <Button type="primary" size="sm" @click.prevent="removeWishlist(data.id)">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                            Remove
                          </Button>
                    </b-col>
                  </b-row>
                </b-container>
              </card>
          </b-col>
        </b-row>
      </b-container>
      <template slot="footer">
        <Button type="danger" @click.native="modals.wishlist = false">Close</Button>
      </template>
    </modal>
    <!-- modal transaction -->
    <modal :show.sync="modals.transaction" headerClasses="justify-content-center" modal-classes="modal-lg">
      <h4 slot="header" class="title title-up">Transaction History</h4>
      <b-container>
        <b-row>
          <b-col cols="12" v-for="(datas, id) in transactions" :key="id" :set="subtotal=0">
             <card>
               Transaction {{new Date(datas.date).getDate()}} - {{new Date(datas.date).getMonth()+1}} - {{new Date(datas.date).getFullYear()}} {{new Date(datas.date).getHours()}}:{{new Date(datas.date).getMinutes()}}
                <b-container fluid>
                  <b-row  v-for="(data, id) in datas.Carts" :key="id" class="border-top border-secondary mt-2 pt-2" :set="subtotal+=(data.quantity*data.Product.price)">
                    <b-col cols="3">
                      <img slot="image" class="card-img-right" :src="data.Product.imageUrl" alt="Card image cap">
                    </b-col>
                    <b-col cols="9">
                        <p class="card-title">{{ data.Product.name }}</p>
                        <p class="card-text">Quantity: {{ data.quantity }}
                        </p>
                        <p class="card-text">Price: Rp {{ data.quantity*data.Product.price }}</p>
                    </b-col>
                  </b-row>
                </b-container>
                <!-- <card class="text-right">
                  <p class="card-text"></p>
                </card> -->
              <div slot="footer" class="card-footer text-right mb-2">
                <p class="mr-4 pr-4">
                Subtotal : {{subtotal}}
                </p>
              </div>
              </card>
          </b-col>
        </b-row>
      </b-container>
      <template slot="footer">
        <Button type="danger" @click.native="modals.transaction = false">Close</Button>
      </template>
    </modal>
<HFooter></HFooter>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import {BCarouselSlide, BCarousel, BRow, BCol, BContainer} from 'bootstrap-vue'
import { Navbar, DropDown, Card, Button, Modal} from '@/components'
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'Home',
  components: {
    BCarouselSlide,
    BCarousel,
    BRow,
    Button,
    BCol,
    Card,
    Modal,
    DropDown,
    Navbar,
    BContainer,
    HFooter
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      togge: true,
      type: 'info',
      modals: {
        carts: false,
        wishlist: false,
        transaction: false
      },
      isFiltered: false,
      isLoggedIn: false
    }
  },
  created () {
    this.$store.dispatch('getCarousel')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getLocation')
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('getWishlist')
      this.$store.dispatch('getCart')
      this.$store.dispatch('getTransaction')
    }
    if (localStorage.getItem('access_token')) {
      this.isLoggedIn = true
    }
  },
  updated () {
    if (localStorage.getItem('access_token')) {
      this.isLoggedIn = true
    }else{
      this.isLoggedIn = false
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    addWishlist (id) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      }else{
        this.$store.dispatch('addWishlist', id)
      }
    },
    addCart (id) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      }else{
        this.$store.dispatch('addCart', id)
      }
    },
    fetchProduct(id=null){
      let data = {}
      if (id) {
        data.location = id
        this.isFiltered = true
      }else{
        this.isFiltered = false
      }
      this.$store.dispatch('getProducts',data)
    },
    checkout () {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      }else{
        Swal.fire({
        title: 'Are you sure?',
        text: "Your purchase will be noted instantly",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Check out'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('checkout')
            this.modals.carts = false
          }
        })
      }
    },
    editCart (id, quantity) {
      if (quantity >= 1) {
        const payload = {
          id: id,
          quantity: quantity
        }
        this.$store.dispatch('editCart', payload)
      }else{
        Swal.fire({
        title: 'Error',
        text: "You cant subtract any more than this!",
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
        }
      })
      }
    },
    removeWishlist (id) {
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.$store.dispatch('removeWishlist', id)
      }
    })
    },
    removeCart (id) {
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.$store.dispatch('removeCart', id)
      }
    })
    },
    logout () {
      Swal.fire({
      title: 'Are you sure to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.$router.push('/logout')
      }
    })
    },
  },
  computed: {
        ...mapState(['banners', 'products', 'wishlist', 'cart', 'transactions', 'locations'])
  }
}
</script>
