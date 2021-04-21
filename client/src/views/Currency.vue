<template>
  <div class="container" style="margin-top: 12vh">
      <div class="row">
        <h3 class="col-12">Price List</h3>
        <table class="table col-12 my-3 table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Condition</th>
                    <th scope="col">Price/baseUnit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="waste in wastes" :key="waste.id" :waste="waste" class="cart-row">
                    <td>{{ waste.name }}</td>
                    <td>{{ waste.condition }}</td>
                    <td>{{ toRupiah(waste.price) }} /{{waste.baseUnit}}</td>
                </tr>
            </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Currency',
  created () {
    this.$store.dispatch('getWastes')
  },
  computed: {
    wastes () {
      return this.$store.state.wastes
    }
  },
  methods: {
    toRupiah (estimate) {
      let rupiah = ''
      const angkarev = estimate.toString().split('').reverse().join('')
      for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
    }
  }
}
</script>
