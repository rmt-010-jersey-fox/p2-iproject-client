<template>
<div>
<Navbar></Navbar>
    <div class="container">
        <!-- <div class="row">
            <div class="col-sm-6 mb-3">
                <div class="card bg-success text-white">
                <div class="card-body">
                    <h5 class="card-title">CHEAPEST!!</h5>
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button class="btn btn-secondary" @click.prevent="addHistory(el.cost[0].value)">Choose This</button>
                </div>
                </div>
            </div>
        </div> -->
        <h5>JNE</h5>
        <div class="row">
            <div class="col-sm-6 mb-3" v-for="el in JNE" :key="el.value">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{el.service}}</h5>
                    <p class="card-text">Price: {{el.cost[0].value}}</p>
                    <button class="btn btn-secondary" @click.prevent="addHistory(el.cost[0].value)">Choose This</button>
                </div>
                </div>
            </div>
        </div>
        <h5>TIKI</h5>
        <div class="row">
            <div class="col-sm-6 mb-3" v-for="el in TIKI" :key="el.value">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{el.service}}</h5>
                    <p class="card-text">Price: {{el.cost[0].value}}</p>
                    <button class="btn btn-secondary" @click.prevent="addHistory(el.cost[0].value)">Choose This</button>
                </div>
                </div>
            </div>
        </div>
        <h5>POS INDONESIA</h5>
        <div class="row">
            <div class="col-sm-6 mb-3" v-for="el in POS" :key="el.value">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{el.service}}</h5>
                    <p class="card-text">Price: {{el.cost[0].value}}</p>
                    <button class="btn btn-secondary" @click.prevent="addHistory(el.cost[0].value)">Choose This</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Search',
  components: {
    Navbar
  },
  methods: {
    addHistory (price) {
      const payload = {
        price,
        item: this.$store.state.item
      }
      this.$store.dispatch('addHistories', payload)
    }
  },
  computed: {
    TIKI () {
      return this.$store.state.tikiPrices
    },
    POS () {
      return this.$store.state.posPrices
    },
    JNE () {
      return this.$store.state.jnePrices
    }
  }
}
</script>

<style>

</style>
