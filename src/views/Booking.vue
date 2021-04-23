<template>
  <section>
      <div class="container">
        <div class="row">
          <main class="col-md-9">
            <table class="table table-borderless">
              <thead class="text-muted">
                <tr class="small text-uppercase">
                  <th scope="col">Room</th>
                  <th scope="col">imageRoom</th>
                  <th scope="col">Price</th>
                  <th scope="col">Available Room</th>
                </tr>
              </thead>
              <tbody>
                <div v-for="book in bookings"
                :key=book.id>
                <tr>
                  <td scope='col' ><img width="400px" :src="book.Room.image_url" alt=""></td>
                  <td scope='col' >{{book.Room.name}}</td>
                  <td scope='col' >{{book.Room.price}}</td>
                  <td scope='col' >{{book.Room.availableRoom}}</td>
                </tr>
                </div>
              </tbody>
            </table>
            <div class="card-body border-top">
              <a href="#" class="btn btn-primary float md-right">Booking!</a>
            </div>
          </main>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Booking',
  created () {
    this.$store.dispatch('fetchBooking')
  },
  computed: {
    bookings () {
      return this.$store.state.books
    }

  }

}
</script>

<style>

</style>
