<template>
   <div>
        <h2>Room List</h2><br>
     <!-- {{this.$store.state.rooms}} -->
        <div class="position-absolute top-1 start-50 translate-middle">
            <button @click.prevent="addPage" type="button" class="btn btn-outline-dark">Add Room</button>
        </div><br>
        <table class="table table-hover" >
            <thead>
            <tr>
                <th scope="col">TypeRoom</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Available Room</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="room in rooms "
                :key="room.id">
                <td> {{room.name}} </td>
                <td> <img :src="room.image_url" alt="" width="150"></td>
                <td> {{room.price}} </td>
                <td> {{room.availableRoom}}</td>
                <td>
                  <button @click.prevent="editRoom(room.id)" class="btn btn-outline-dark"> Edit </button>
                  <button @click.prevent="deleteRoom(room.id)" class="btn btn-outline-dark" > Delete </button>
                </td>
              </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    addPage () {
      this.$router.push('/addRooms')
    },
    deleteRoom (id) {
      this.$store.dispatch('deleteRoom', id)
    },
    editRoom (id) {
      // console.log(id, '<<<<<<<<<')
      this.$store.dispatch('editRoom', id)
      this.$router.push('/editRooms')
    }
  },
  created () {
    this.$store.dispatch('fetchRoom')
  },
  computed: {
    rooms () {
      // console.log(this.$store.state.rooms.room)
      return this.$store.state.rooms
    }
  }
}
</script>
