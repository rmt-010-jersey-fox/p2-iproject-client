<template>
<div>
<Navbar></Navbar>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 mb-3 mx-auto">
                <div class="card bg-success text-white">
                <div class="card-body">
                    <h5 class="card-title">CHEAPEST!!</h5>
                    <h5 class="card-title">By: {{cheapest.name}}</h5>
                    <h5 class="card-title">Service: {{cheapest.service}}</h5>
                    <p class="card-text">Price: {{cheapest.price}}</p>
                    <button class="btn btn-success" @click.prevent="addHistory(cheapest.price)">Choose This</button>
                </div>
                </div>
            </div>
        </div>
        <h5>JNE</h5>
        <div class="row">
            <div class="col-sm-6 mb-3" v-for="el in JNE" :key="el.value">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Service: {{el.service}}</h5>
                    <p class="card-text">Price: {{el.cost[0].value}}</p>
                    <button class="btn btn-success" @click.prevent="addHistory(el.cost[0].value)">Choose This</button>
                </div>
                </div>
            </div>
        </div>
        <h5>TIKI</h5>
        <div class="row">
            <div class="col-sm-6 mb-3" v-for="el in TIKI" :key="el.value">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Service: {{el.service}}</h5>
                    <p class="card-text">Price: {{el.cost[0].value}}</p>
                    <button class="btn btn-success" @click.prevent="addHistory(el.cost[0].value)">Choose This</button>
                </div>
                </div>
            </div>
        </div>
        <h5>POS INDONESIA</h5>
        <div class="row">
            <div class="col-sm-6 mb-3" v-for="el in POS" :key="el.value">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Service: {{el.service}}</h5>
                    <p class="card-text">Price: {{el.cost[0].value}}</p>
                    <button class="btn btn-success" @click.prevent="addHistory(el.cost[0].value)">Choose This</button>
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
    },
    cheapest () {
      const jne = this.$store.state.jnePrices
      const tiki = this.$store.state.tikiPrices
      const pos = this.$store.state.posPrices
      const jneService = jne[0].service
      const tikiService = tiki[0].service
      const posService = pos[0].service
      const jnePrice = jne[0].cost[0].value
      const tikiPrice = tiki[0].cost[0].value
      const posPrice = pos[0].cost[0].value
      const cheapest = [{ name: 'jne', price: jnePrice, service: jneService }, { name: 'tiki', price: tikiPrice, service: tikiService }, { name: 'pos', price: posPrice, service: posService }]
      cheapest.sort((a, b) => a.price - b.price)
      return cheapest[0]
    }
  }
}
</script>

<style>

</style>
