<template>
<div>
<Navbar></Navbar>
<table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(el, i) in histories" :key="el.id">
      <th scope="row">{{i+1}}</th>
      <td>{{el.item}}</td>
      <td>{{el.price}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'History',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('fetchHistories')
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  }
}
</script>

<style>

</style>
