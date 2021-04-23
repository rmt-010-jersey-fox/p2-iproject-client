<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color: hotpink; width: 100%; display: flex; justify-content: space-between;">{{destination.place_name}} <button @click.prevent="delDestination" class="btn btn-danger">Delete</button></li>
  </ul>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'DestinationsCards',
  props: ['destination'],
  methods: {
    delDestination () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this action!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteDestination', this.destination.id)
              .then((_) => {
                this.$store.dispatch('fetchUserDestination', this.$route.params.id)
              })
              .catch(err => {
                console.log(err)
              })
            Swal.fire(
              'Deleted!',
              'Product Successfully Deleted',
              'success'
            )
          }
        })
    }
  }
}
</script>

<style>
</style>
