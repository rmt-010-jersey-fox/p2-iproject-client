<template>
<div class="container">
  <div class="row">
  <div class="card" style="width: 17rem;">
    <div  v-for="room in rooms"
    :key="room.id" class="card-body">
      <h5 width="300px" class="card-title" ><img :src="room.image_url" alt=""></h5>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Nama Product :{{room.name}} </li>
          <li class="list-group-item">Harga: {{room.price}} </li>
          <li class="list-group-item">Stock: {{room.availableRoom}} </li>
      </ul>
      <a @click.prevent="booking(room.id)" class="btn btn-success">Booking!!</a>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    this.$store.dispatch('fetchRoom')
  },
  computed: {
    rooms () {
      // console.log(this.$store.state.rooms.room, '<<<<<<<<Mmmmm')
      return this.$store.state.rooms
    }
  },
  methods: {
    booking (id) {
      this.$store.dispatch('booking', id)
      this.$router.push('/booking')
    }
  }

}
</script>

<style>

</style>
