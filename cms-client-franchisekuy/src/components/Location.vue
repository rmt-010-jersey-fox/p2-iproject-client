<template>
    <div class="pcoded-inner-content">
        <!-- Main-body start -->
        <div class="main-body">
            <button type="button" class="btn btn-primary" @click="showCreateModal">
                Add new location
            </button>
            <div class="page-wrapper">
                <!-- Page-body start -->
                <div class="page-body">
                    <!-- Basic table card start -->
                    <div class="card">
                        <div class="card-block table-border-style">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(data, id) in locations.data" :key="id">
                                            <th> {{ id+1 }} </th>
                                            <th> {{ data.name }} </th>
                                            <th> {{ (data.status == 1) ? 'Active' : ((data.status == 0) ? 'Inactive' : 'Test Item') }} </th>
                                            <th>
                                                <div>
                                                    <button class="btn waves-effect waves-light btn-success btn-outline-success mx-2" v-if="(data.status == 0)" @click.prevent="showDisableModal(data.id, 1)"><i class="fa fa-check-square-o" aria-hidden="true"></i>Activate</button>
                                                    <button class="btn waves-effect waves-light btn-danger btn-outline-danger mx-2" v-else-if="(data.status == 1)" @click.prevent="showDisableModal(data.id, 0)"><i class="fa fa-times" aria-hidden="true"></i>Deactivate</button>
                                                    <button class="btn waves-effect waves-light btn-primary btn-outline-primary" @click.prevent="showEditModal(data)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit Item</button>
                                                    <button class="btn waves-effect waves-light btn-danger btn-outline-danger mx-2" @click.prevent="showDeleteModal(data.id)"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete Item</button>
                                                </div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Basic table card end -->
                    <!-- Inverse table card start -->
                </div>
                <!-- Page-body end -->
            </div>
        </div>
        <modal :data="modalData" :types="'Location'" :action="action"></modal>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ref="modal" style="display:none">
        </button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import modal from './Modal.vue'
import Swal from 'sweetalert2'
export default {
  name: 'locations',
  components: {
    modal
  },
  data () {
    return {
      modalData: {},
      action: ''
    }
  },
  mounted () {
    this.$store.commit('setTitle', 'Locations')
  },
  created () {
    try {
      this.$store.dispatch('getLocationAll')
    } catch (err) {
      console.log(err, 'error')
    }
  },
  computed: {
    ...mapState(['locations'])
  },
  methods: {
    showEditModal (data) {
      this.modalData = data
      this.$refs.modal.click()
      this.action = 'Update'
    //   console.log(data)
    },
    showCreateModal () {
      this.modalData = {}
      this.action = 'Create'
      this.$refs.modal.click()
    //   console.log(data)
    },
    showDisableModal (id, status) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: (status == 0) ? 'Yes, Deactivate it!' : 'Yes, Activate it!'
      }).then((result) => {
        const data = {
          id: id,
          data: {
            status: status
          }
        }
        if (result.isConfirmed) {
          this.$store.dispatch('updateLocationStatus', data)
        }
      })
    },
    showDeleteModal (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteLocation', id)
        }
      })
    }
  }
}
</script>
<style scoped>
    img.itemCover {
        height: 100px;
    }
</style>
