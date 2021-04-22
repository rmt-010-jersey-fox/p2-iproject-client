<template>
  <div>
    <div class="container2 mt-5">
      <div class="col-9">
        <b-card class="m-3">
          <h4 class="text-center">Ayo miliki bisnis sekarang, sebelum kehabisan!</h4>
        </b-card>
        <div class="container2">
            <div class="ros" style="overflow: scroll;max-height: 100vh">
              <a href="#" @click.prevent="changePage(busines.id)" v-for="busines in listBusines" :key="busines.id" style="color:black;">
                <div class="d-inline-block card m-4" style="width: 18rem;">
                  <img :src="busines.photo_url" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title mb-0">{{busines.name}}</h5>
                    <p class="card-text mt-1">{{busines.Category.name}}</p>
                    <p class="dashed text-center">
                      DEVIDEN {{busines.deviden + '%'}}
                    </p>
                    <div class="container2 p-0">
                      <div class="col-sm p-0">
                        <p class="card-text mt-1 text-left m-0" style="font-size:0.8rem">Total Pendanaan</p>
                        <p class="card-text mt-1 text-left" style="font-size:0.8rem"><strong>{{convertToRupiah(busines.total_saham)}}</strong></p>
                      </div>
                      <div class="col-sm p-0">
                        <p class="card-text mt-1 text-right m-0" style="font-size:0.8rem">Priode Deviden</p>
                        <p class="card-text mt-1 text-right" style="font-size:0.8rem"><strong>{{busines.deviden_periode + ' bulan'}}</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBisnis',
  components: {
  },
  created() {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategory')
    this.$store.dispatch('fetchDataInvest')
    this.$store.dispatch('fetchDataUser')
  },
  methods: {
    convertToRupiah (angka) {
      let rupiah = '';		
      let angkarev = angka.toString().split('').reverse().join('')
      for(let i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.'
      return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    },
    changePage(id) {
      this.$router.push('/bisnis/' + id)
    }
  },
  computed: {
    listBusines() {
      return this.$store.state.listBusines
    },
    listUser() {
      return this.$store.state.listUser
    }
  }
}
</script>

<style scoped>
  p.dashed {border-style: dashed;}
</style>
