<template>
  <div class="container" style="margin-top: 12vh">
      <div class="row">
        <h3 class="col-12 mb-3">Price List</h3>
        <div class="row wt rounded text-center">
          <div v-for="waste in wastes" :key="waste.id" :waste="waste" class="col-lg-3 col-md-6 mb-4">
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <h5 class="card-title">{{ waste.name }}</h5>
                <p class="card-text">{{ waste.condition }}</p>
              </div>
              <div class="card-footer">
                <p>{{ toRupiah(waste.price) }} /{{waste.baseUnit}}</p>
              </div>
            </div>
          </div>
        </div>
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
