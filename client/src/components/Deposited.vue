<template>
  <tr v-if="waste.status === 'Deposited'" class="cart-row">
      <td>{{ waste.Waste.name }}</td>
      <td>{{ waste.Waste.condition }}</td>
      <td>{{ waste.quantity }}</td>
      <td>{{ estimatePrice() }}</td>
      <td>{{ datenya() }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Deposited',
  props: ['waste', 'cuy'],
  methods: {
    toRupiah (estimate) {
      let rupiah = ''
      const angkarev = estimate.toString().split('').reverse().join('')
      for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
    },

    estimatePrice () {
      const price = this.waste.quantity * this.waste.Waste.price
      return this.toRupiah(price)
    },

    datenya () {
      return this.waste.updatedAt.split('T')[0]
    }
  }
}
</script>
