<template>
  <div class="home container" style="margin-top: 12vh">
    <div class="row justify-content-around">
      <h2 class="col-12">Welcome {{name}} !</h2>
      <table class="table col-12 my-3 table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">My Account Saldo</th>
              <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
          <tr class="cart-row">
            <td>{{saldo}}</td>
            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddModal">
            Add Waste
            </button></td>
          </tr>
        </tbody>
      </table>
      <div class="col-7">
        <iframe width="100%" height="400" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=Bank%20Sampah&key=AIzaSyAixPAAmPjVM16e3JneMCoT36vqcFNoSnA"></iframe>
      </div>
      <div class="col-3">
        <AirPollution
        :airQ="airQ"
        :weather="weather"
        />
      </div>
    </div>
    <AddWaste/>
  </div>
</template>

<script>
// @ is an alias to /src
import AirPollution from '@/components/AirPollution.vue'
import AddWaste from '@/components/AddWaste.vue'

export default {
  name: 'Home',
  components: {
    AirPollution,
    AddWaste
  },
  methods: {
    toRupiah (nominal) {
      let rupiah = ''
      const angkarev = nominal.toString().split('').reverse().join('')
      for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
    }
  },
  created () {
    this.$store.dispatch('getWastes')
    this.$store.dispatch('getUserWastes')
    this.$store.dispatch('airQuality')
  },
  computed: {
    saldo () {
      let isSaldo = 0
      this.$store.state.userWastes.forEach(el => {
        if (el.status === 'Deposited') {
          isSaldo = isSaldo + (el.Waste.price * el.quantity)
        }
      })
      return this.toRupiah(isSaldo)
    },

    name () {
      return this.$store.state.name
    },

    airQ () {
      return this.$store.state.airQuality
    },

    weather () {
      return this.$store.state.weather
    }
  }
}
</script>
