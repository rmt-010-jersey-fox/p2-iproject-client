<template>
  <div class="wrapper1">
            <section class="main-container justify-content-center align-items-center">
                <div  class="card mt-3 mb-5 shadow-lg">
                    <h2>Add Room Model!</h2>
                    <form  @submit.prevent="add" class="mt-4" action="">
                        <div class="form-floating mb-3">
                            <input v-model="addImage" class="form-control" placeholder="">
                            <label for="image">add image</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="addName" class="form-control"  placeholder="">
                            <label for="name">add Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="addPrice" class="form-control"  placeholder="">
                            <label for="price">add Price</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="addAvailableRoom" class="form-control"  placeholder="">
                            <label for="stock">Available Room</label>
                        </div>
                        <label class="label">
                            <button type="submit" class="button is-success">
                                Add
                            </button>
                        </label>
                    </form>
                </div>
            </section>
        </div>
</template>

<script>
export default {
  name: 'AddRoom',
  data () {
    return {
      addImage: '',
      addName: '',
      addPrice: '',
      addAvailableRoom: ''
    }
  },
  methods: {
    add () {
      this.$store.dispatch('add', { image_url: this.addImage, name: this.addName, price: this.addPrice, stock: this.stock, availableRoom: this.addAvailableRoom })
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
