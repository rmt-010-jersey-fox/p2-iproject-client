<template>
  <div>
      <div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="AddModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">ADD WASTE</h5>
            </div>
            <div class="modal-body">
               <form>
                <div>
                    <label class="my-1 mr-2">Name</label>
                    <select v-model="WasteId"  class="custom-select">
                        <option selected disabled>---Select---</option>
                        <option v-for="item in wastes" :key="item.id" :value="item.id">{{item.name}}, {{item.condition}}</option>
                    </select>
                    <div class="form-floating mb-3">
                        <input type="number" v-model="quantity" class="form-control" placeholder="Waste's Quantity">
                        <label>Quantity</label>
                    </div>
                </div>
            </form>
            </div>
            <div class="modal-footer">
                <button type="button" @click="clearAdd" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="addWaste(); clearAdd();" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
            </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'AddWaste',
  data () {
    return {
      WasteId: 0,
      quantity: 1
    }
  },
  computed: {
    wastes () {
      return this.$store.state.wastes
    }
  },
  methods: {
    clearAdd () {
      this.WasteId = 0
      this.quantity = 1
    },

    addWaste () {
      const { WasteId, quantity } = this
      this.$store.dispatch('addWaste', { WasteId, quantity })
    }
  }
}
</script>
