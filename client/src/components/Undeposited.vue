<template>
  <tr v-if="waste.status === 'Undeposited'" class="cart-row">
      <td>{{ waste.Waste.name }}</td>
      <td>{{ waste.Waste.condition }}</td>
      <td>{{ estimatePrice() }}</td>
      <td>{{ waste.quantity }}</td>
      <td>
          <button @click.prevent="addItem" type="button" class="btn mx-1 my-1 btn-success">+</button>
          <button @click.prevent="minItem" type="button" class="btn mx-1 my-1 btn-warning">-</button>
          <button @click.prevent="deleteItem" type="button" class="btn mx-1 my-1 btn-danger">Delete</button>
      </td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Undeposited',
  props: ['waste'],
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

    deleteItem () {
      const WasteId = this.waste.WasteId
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
          this.$store.dispatch('deleteWaste', { WasteId })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    },

    addItem () {
      const WasteId = this.waste.WasteId
      this.$store.dispatch('updateWaste', { WasteId, quantity: 1 })
    },

    minItem () {
      const WasteId = this.waste.WasteId
      this.$store.dispatch('updateWaste', { WasteId, quantity: -1 })
    }
  }
}
</script>
