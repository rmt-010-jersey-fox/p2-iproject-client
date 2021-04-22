<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <input type="text" class="" id="name" placeholder="*nama bisnis anda" v-model="name">
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <select class="custom-select" v-model="CategoryId">
                <option selected disabled value="">Category List</option>
                <option v-for="category in listCategory" :key="category.id" :value="category.id">{{category.name}}</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="photo" class="form-label">Photo Url</label>
              <input type="text" class="" id="photo"  placeholder="*photo url bisnis anda" v-model="photo_url">
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Alamat</label>
              <input type="text" class="" id="address"  placeholder="*alamat bisnis anda" v-model="address">
            </div>
            <div class="mb-3">
              <label for="description">Deskripsi</label>
              <textarea class="form-control" id="description" rows="3" placeholder="*deskripsikan bisnis anda" v-model="description"></textarea>
            </div>
            <div class="mb-3">
              <label for="total_saham" class="form-label">Total Pendanaan</label>
              <input type="number" class="" id="total_saham" min="100000000" placeholder="*total pendanaan bisnis anda" v-model="total_saham">
            </div>
            <div class="mb-3">
              <label for="deviden" class="form-label">Deviden</label>
              <input type="number" class="" id="deviden" min="0" placeholder="*deviden dalam satuan %" v-model="deviden">
            </div>
            <div class="mb-3">
              <label for="deviden_periode" class="form-label">Periode Deviden</label>
              <input type="number" class="" id="deviden_periode" min="0" placeholder="*periode deviden dalam satuan bulan" v-model="deviden_periode">
            </div>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalAdd',
  data() {
    return{
      name: '',
      CategoryId: '',
      photo_url: '',
      description: '',
      total_saham: '',
      deviden: '',
      deviden_periode: '',
      address: ''
    }
  },
  methods: {
    postBusines() {
      const payload = {
        name: this.name,
        CategoryId: this.CategoryId,
        photo_url: this.photo_url,
        description: this.description,
        total_saham: this.total_saham,
        deviden: this.deviden,
        deviden_periode: this.deviden_periode,
        address: this.address
      }
      this.$store.dispatch('postBusines', payload)
      .then(() => {
        this.$store.dispatch('fetchData')
        this.$vToastify.success('Success add business')
        this.$router.push({ name: Home }).catch(() => {})
      })
      .catch(error => {
        error.response.data.message.forEach(element => {
          this.$vToastify.error(element)       
        })
      })
    }
  },
  computed: {
    listCategory() {
      return this.$store.state.listCategory
    }
  }
}
</script>

<style>

</style>