<template>
<div class="p-4">
  <div class="container2" style="margin-top:6rem">
    <div class="col-4">
      <b-card class="text-center">
        <img src="../assets/MRLN.jpeg" alt="" width="400px">
        <div class="container2 mt-3">
          <div class="col-3 text-left">
            <img src="../assets/avatar.png" alt="" width="60px">
          </div>
          <div class="col-sm text-left p-2">
            <h6>Pemilik Bisnis:</h6>
            <h5><strong>{{initialValue.User.full_name}}</strong></h5>
          </div>
        </div>
      </b-card>
    </div>
    <div class="col-8">
      <h4>{{initialValue.name}}</h4>
      <h6 class="d-inline mr-3">{{initialValue.Category.name}}</h6>
      <div class="d-inline" v-if="initialValue.User.email === userEmail">
        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">
          <img src="../assets/edit.png" alt="" class="d-inline mr-2" width="20rem">
        </a>
        <a href="#" @click.prevent="deleteBusines(initialValue.id)">
          <img src="../assets/delete.png" alt="" class="d-inline" width="19rem">
        </a>
      </div>
      <hr>
      <div class="container2">
        <div class="col-sm p-0">
          <b-card>
            <h6><strong>Deskripsi Perusahaan:</strong></h6>
            <p>
            {{initialValue.description}}
            </p>
          </b-card>
          <b-card class="mt-3">
            <div class="container2 text-center">
              <div class="col-5 text-left">
                <p><strong>Saham Tersisa</strong></p>
              </div>
              <div class="col-1">
                <p><strong>:</strong></p>
              </div>
              <div class="col-6 text-left">
                <p><strong>{{100 - stockSold}}%</strong></p>
              </div>
            </div>
            <div class="container2 text-center">
              <div class="col-5 text-left">
                <p>Harga Saham</p>
              </div>
              <div class="col-1">
                <p>:</p>
              </div>
              <div class="col-6 text-left">
                <p>{{convertToRupiah(priceStock)}}</p>
              </div>
            </div>
            <div class="container2 text-center">
              <div class="col-5 text-left">
                <p>Total Saham</p>
              </div>
              <div class="col-1">
                <p>:</p>
              </div>
              <div class="col-6 text-left">
                <p>{{Math.ceil(initialValue.total_saham / priceStock)}} lembar</p>
              </div>
            </div>
            <div class="container2 text-center">
              <div class="col-5 text-left">
                <p>Total Saham (Rp)</p>
              </div>
              <div class="col-1">
                <p>:</p>
              </div>
              <div class="col-6 text-left">
                <p>{{convertToRupiah(initialValue.total_saham)}}</p>
              </div>
            </div>
          </b-card>
          <b-card class="mt-3">
            <div class="container2 text-center">
              <div class="col-5 text-left">
                <p><strong>Saham Terjual</strong></p>
              </div>
              <div class="col-1">
                <p><strong>:</strong></p>
              </div>
              <div class="col-6 text-left">
                <p><strong>{{stockSold}}%</strong></p>
              </div>
            </div>
            <div class="container2 text-center">
              <div class="col-5 text-left">
                <p>Dalam Lembar</p>
              </div>
              <div class="col-1">
                <p>:</p>
              </div>
              <div class="col-6 text-left">
                <p>{{priceStockSold / priceStock }} lembar</p>
              </div>
            </div>
            <div class="container2 text-center">
              <div class="col-5 text-left">
                <p>Dalam Rupiah</p>
              </div>
              <div class="col-1">
                <p>:</p>
              </div>
              <div class="col-6 text-left">
                <p>{{convertToRupiah(priceStockSold)}}</p>
              </div>
            </div>
          </b-card>
        </div>
        <div class="col-sm">
          <b-card>
            <div v-if="initialValue.User.email !== userEmail">
              <h4 class="text-center">Yuk Miliki Bisnis ini!</h4>
              <!-- <form action="" @submit.prevent='submitInvest(initialValue.id)'>
                <input type="text" v-model="total_invest">
                <button>SUBMIT</button>
              </form> -->
              <button type="button" class="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#exampleModal2">Click Me!</button>
            </div>
            <div v-if="initialValue.User.email === userEmail">
              <h4 class="text-center">List Investor</h4>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
  <b-card class="mt-5">
    <div class="container2">
      <div class="col-2">
        <img src="../assets/map.png" alt="" width="100px" class="ml-5">
      </div>
      <div class="col-4">
          <h5><strong>Alamat:</strong></h5>
          <p>{{initialValue.address}}</p>
      </div>
      <div class="col-6"></div>
    </div>
  </b-card>
  <b-card class="mt-3">
    <div class="mapouter">
      <iframe :src="linkEmbedMap" width="100%" height="350" frameborder="0" style="border:0">
      </iframe>
    </div>
  </b-card>
  <ModalEdit :initialValue="initialValue"/>
  <ModalInvest :initialValue="initialValue"/>
</div>
</template>

<script>
import ModalEdit from '../components/ModalEdit'
import ModalInvest from '../components/ModalInvest'
export default {
  name: 'Bisnis',
  data() {
    return{
      total_invest: '',
    }
  },
  components: {
    ModalEdit,
    ModalInvest
  },
  methods: {
    // submitInvest(id) {
    //   let params = {
    //     id: id,
    //     total_invest: this.total_invest
    //   }
    //   this.$store.dispatch('submitInvest', params)
    //   .then(({ data }) => {
    //     this.$store.commit('setTokenUser', data.result)
    //     this.total_invest = ''
    //     return snap.pay(data.result.token, {
    //       // Optional
    //       onSuccess: function(result){
    //         /* You may add your own js here, this is just example */
    //       },
    //       // Optional
    //       onPending: function(result){
    //         /* You may add your own js here, this is just example */
    //       },
    //       // Optional
    //       onError: function(result){
    //         /* You may add your own js here, this is just example */
    //       }
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // },
    fetchDataById() {
      const id = this.$route.params.id
      this.$store.dispatch('fetchDataById', id)
      .then(({ data }) => {
        this.$store.commit('setInitialValue', data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
    },
    deleteBusines(id) {
      this.$store.dispatch('deleteBusines', id)
      this.$store.dispatch('fetchDataById', id)
      this.$router.push('/binis/' + id)
      this.$swal.fire(
          'Busines Deleted!',
          '',
          'success'
      )
    },
    convertToRupiah (angka) {
      let rupiah = '';		
      let angkarev = angka.toString().split('').reverse().join('')
      for(let i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.'
      return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    },
    changePage(id) {
      this.$router.push('/bisnis/' + id)
    },
    getLocation() {
      const params = this.initialValue.address
      this.$store.dispatch('fetchLocation', params)
      .then(({ data }) => {
        this.$store.commit('setLocation', data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
    }
  },
  created() {
      this.fetchDataById()
      this.getLocation()
  },
  computed: {
    initialValue() {
      if(this.$store.state.initialValue) {
        return this.$store.state.initialValue
      }
    },
    userEmail() {
      return this.$store.state.dataLogin
    },
    stockSold() {
      const initialValue = this.$store.state.initialValue
      return Math.ceil(((initialValue.total_saham - initialValue.total_saham_update)/(initialValue.total_saham + initialValue.total_saham_update))*100)
    },
    priceStock() {
      const initialValue = this.$store.state.initialValue
      return Math.ceil(initialValue.total_saham / (initialValue.total_saham * 0.05/100))
    },
    priceStockSold() {
      const initialValue = this.$store.state.initialValue
      return initialValue.total_saham - initialValue.total_saham_update
    },
    linkEmbedMap() {
      if(this.$store.state.location) {
        const {lat, lon} = this.$store.state.location[0]
        return `https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`
      }
    }
  }
}
</script>

<style>

</style>