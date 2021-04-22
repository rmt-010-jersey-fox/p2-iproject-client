<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content p-2">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Checkout Invest</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="#" @submit.prevent='submitInvest(initialValue.id)'>
            <input type="number" min="1000000" v-model="total_invest" placeholder="*masukkan jumlah investasi (Rp)">
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
  name: 'ModalInvest',
  data() {
    return{
      total_invest: '',
    }
  },
  props: [ 'initialValue' ],
  methods: {
    submitInvest(id) {
      let params = {
        id: id,
        total_invest: this.total_invest
      }
      this.$store.dispatch('submitInvest', params)
      .then(({ data }) => {
        this.$store.commit('setTokenUser', data.result)
        this.total_invest = ''
        return snap.pay(data.result.token, {
          // Optional
          onSuccess: function(result){
            /* You may add your own js here, this is just example */
          },
          // Optional
          onPending: function(result){
            /* You may add your own js here, this is just example */
          },
          // Optional
          onError: function(result){
            /* You may add your own js here, this is just example */
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  computed: {

  }
}
</script>

<style>

</style>