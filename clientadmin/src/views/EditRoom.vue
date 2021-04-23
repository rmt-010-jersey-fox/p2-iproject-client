<template>
  <div class="wrapper1">
            <section class="main-container justify-content-center align-items-center">
                <div  class="card mt-3 mb-5 shadow-lg">
                    <h2>Edit Room Model!</h2>
                    <form  @submit.prevent="Edit" class="mt-4" action="">
                        <div class="form-floating mb-3">
                            <input v-model="editImage" class="form-control" placeholder="">
                            <label for="image">Edit image</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="editName" class="form-control"  placeholder="">
                            <label for="name">Edit Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="editPrice" class="form-control"  placeholder="">
                            <label for="price">Edit Price</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="editAvailableRoom" class="form-control"  placeholder="">
                            <label for="stock">Available Room</label>
                        </div>
                        <label class="label">
                            <button type="submit" class="button is-success">
                                edit!
                            </button>
                        </label>
                    </form>
                </div>
            </section>
        </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      editImage: '',
      editName: '',
      editPrice: '',
      editAvailableRoom: ''
    }
  },
  computed: {
    room () {
      console.log(this.$store.state.room)
      return this.$store.state.room
    }
  },
  watch: {
    room () {
      this.editImage = this.room.image_url
      this.editName = this.room.name
      this.editPrice = this.room.price
      this.editAvailableRoom = this.room.availableRoom
    }
  },
  methods: {
    Edit () {
      this.$store.dispatch('Edit', { image_url: this.editImage, name: this.editName, price: this.editPrice, availableRoom: this.editAvailableRoom })
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
