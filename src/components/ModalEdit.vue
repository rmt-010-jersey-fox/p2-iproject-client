<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content p-2">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Daftar Bisnis</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="postBusines">
            <div class="mb-3">
              <label for="name" class="form-label">Nama Bisnis</label>
              <input type="text" class="" id="name" placeholder="*nama bisnis anda" v-model="initialValue.name">
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <select class="custom-select" v-model="initialValue.Category.id">
                <option selected disabled value="">Category List</option>
                <option v-for="category in listCategory" :key="category.id" :value="category.id">{{category.name}}</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="photo" class="form-label">Photo Url</label>
              <input type="text" class="" id="photo"  placeholder="*photo url bisnis anda" v-model="initialValue.photo_url">
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Alamat</label>
              <input type="text" class="" id="address"  placeholder="*alamat bisnis anda" v-model="initialValue.address">
            </div>
            <div class="mb-3">
              <label for="description">Deskripsi</label>
              <textarea class="form-control" id="description" rows="3" placeholder="*deskripsikan bisnis anda" v-model="initialValue.description"></textarea>
            </div>
            <div class="mb-3">
              <label for="total_saham" class="form-label">Total Pendanaan</label>
              <input type="number" class="" id="total_saham" min="0" placeholder="*total pendanaan bisnis anda" v-model="initialValue.total_saham">
            </div>
            <div class="mb-3">
              <label for="deviden" class="form-label">Deviden</label>
              <input type="number" class="" id="deviden" min="0" placeholder="*deviden dalam satuan %" v-model="initialValue.deviden">
            </div>
            <div class="mb-3">
              <label for="deviden_periode" class="form-label">Periode Deviden</label>
              <input type="number" class="" id="deviden_periode" placeholder="*periode deviden dalam satuan bulan" v-model="initialValue.deviden_periode">
            </div>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="updateBusines(initialValue.id)">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalEdit',
  data() {
    return{
    }
  },
  methods: {
    updateBusines(id) {
      this.$store.dispatch('updateBusines', id)
      .then(() => {
        this.$vToastify.success('Success update business')
      })
      .catch(error => {
        error.response.data.message.forEach(element => {
          this.$vToastify.error(element)       
        })
      })
    }
  },
  created() {
    this.$store.dispatch('fetchCategory')
  },
  props: [ 'initialValue' ],
  computed: {
    listCategory() {
      return this.$store.state.listCategory
    }
  }
}
</script>

<style>

</style>