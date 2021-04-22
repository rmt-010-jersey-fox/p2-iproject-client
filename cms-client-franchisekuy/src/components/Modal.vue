<template>
<!-- Vertically centered scrollable modal -->
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ `${action} ${types}` }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Product Form -->
            <form class="form-material" v-if="(types == 'Product')" @submit.prevent="manageProduct((data.id)? data.id : null)">
                <div class="modal-body">
                    <div class="card-block">
                        <div class="errors-container">

                        </div>
                            <div class="form-group form-default form-static-label">
                                <input type="text" v-model="data.name" class="form-control" lazy>
                                <span class="form-bar"></span>
                                <label class="float-label">Name</label>
                            </div>
                            <div class="form-group form-default form-static-label">
                                <input type="text" v-model="data.imageUrl" class="form-control">
                                <span class="form-bar"></span>
                                <label class="float-label">Image Url</label>
                            </div>
                            <div class="form-group form-default form-static-label">
                                <input type="number" v-model="data.price" class="form-control">
                                <span class="form-bar"></span>
                                <label class="float-label">Price</label>
                            </div>
                            <div class="form-group form-default form-static-label">
                                <input type="number" v-model="data.stock" class="form-control">
                                <span class="form-bar"></span>
                                <label class="float-label">Stock</label>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Location</label>
                                <div class="col-sm-10">
                                    <select name="select" class="form-control" v-model="data.LocationId">
                                        <option :value="location.id" v-for="(location, id) in locations.data" :key="id">{{ location.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Status</label>
                                <div class="col-sm-10">
                                    <select name="select" class="form-control" v-model="data.status">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
                <!-- Location Form -->
            <form class="form-material" v-else-if="(types == 'Location')" @submit.prevent="manageLocation((data.id)? data.id : null)">
                <div class="modal-body">
                    <div class="card-block">
                        <div class="errors-container">

                        </div>
                            <div class="form-group form-default form-static-label">
                                <input type="text" v-model="data.name" class="form-control" lazy>
                                <span class="form-bar"></span>
                                <label class="float-label">Name</label>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Status</label>
                                <div class="col-sm-10">
                                    <select name="select" class="form-control" v-model="data.status">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
                <!-- Banner form -->
            <form class="form-material" v-else-if="(types == 'Banner')" @submit.prevent="manageBanner((data.id)? data.id : null)">
                <div class="modal-body">
                    <div class="card-block">
                        <div class="errors-container">

                        </div>
                            <div class="form-group form-default form-static-label">
                                <input type="text" v-model="data.name" class="form-control" lazy>
                                <span class="form-bar"></span>
                                <label class="float-label">Name</label>
                            </div>
                            <div class="form-group form-default form-static-label">
                                <input type="text" v-model="data.imageUrl" class="form-control">
                                <span class="form-bar"></span>
                                <label class="float-label">Image Url</label>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Status</label>
                                <div class="col-sm-10">
                                    <select name="select" class="form-control" v-model="data.status">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-target="#exampleModal" ref="modalButton" style="display:none">
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'modal',
  props: ['data', 'types', 'action'],
  data () {
    return {
      id: '',
      name: '',
      imageUrl: '',
      price: '',
      stock: '',
      status: '',
      LocationId: '',
      updated: false
    }
  },
  methods: {
    manageProduct (data = null) {
      if (this.action == 'Update') {
        const productData = {
          id: data,
          data: this.data
        }
        this.$store.dispatch('updateProduct', productData)
        this.$refs.modalButton.click()
      } else {
        const productData = this.data
        this.$store.dispatch('createProduct', productData)
        this.$refs.modalButton.click()
      }
    },
    manageLocation (data = null) {
      if (this.action == 'Update') {
        const productData = {
          id: data,
          data: this.data
        }
        this.$store.dispatch('updateLocation', productData)
        this.$refs.modalButton.click()
      } else {
        const productData = this.data
        this.$store.dispatch('createLocation', productData)
        this.$refs.modalButton.click()
      }
    },
    manageBanner (data = null) {
      if (this.action == 'Update') {
        const productData = {
          id: data,
          data: this.data
        }
        this.$store.dispatch('updateBanner', productData)
        this.$refs.modalButton.click()
      } else {
        const productData = this.data
        this.$store.dispatch('createBanner', productData)
        this.$refs.modalButton.click()
      }
    }
  },
  computed: {
    ...mapState(['locations'])

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
