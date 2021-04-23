<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color: tomato; width: 100%; display: flex; justify-content: space-between;">{{googleDestination.name}} <button @click="addDestination" class="btn btn-danger">Add</button></li>
  </ul>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'DesListCards',
  props: ['googleDestination'],
  methods: {
    addDestination () {
      console.log('masyuuuuuuuuuuuuuk')
      const { name } = this.googleDestination
      this.$store.dispatch('addDestinations', { place_name: name, id: this.$route.params.id })
        .then(data => {
          console.log(data)
          Swal.fire('success')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
