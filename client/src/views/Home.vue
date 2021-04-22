<template>
  <div class="home" style="margin-top:10px; background-color: #e6eaed; height: 95vh">
    <!-- HEADER -->
    <div style="background-color: #0770cd; height: 440px">
        <img src="../assets/header.png" class="img" alt="Responsive image" style="margin-top:145px; width: 100%; ">
    </div>
    <!-- FORM CARI MOBIL -->
    <div class="search-car border border-secondary" style="margin-top:25px; margin-bottom: -100px">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sewa Lepas Kunci</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Sewa dengan Sopir</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <form>
                    <div class="form-group">
                      <label>Lokasi Sewa Mobil</label>
                      <select v-model="location" class="js-example-basic-single form-control" required>
                        <option value="default" selected="selected" disabled>--- choose ---</option>
                        <option v-for="(prov, idx) in provinsi" :key="idx" :value="prov">{{ prov }}</option>
                      </select>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Tanggal Mulai Sewa</label>
                        <input type="date" class="form-control" v-model="start_date" required>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="startBook">Tanggal Selesai Sewa</label>
                        <input type="date" class="form-control" v-model="end_date" required>
                      </div>
                    </div>
                    <button type="submit" class="btn" style="background-color: #0770cd; color: white" @click.prevent="searchCar(location)">Cari Mobil</button>
                  </form>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from '../../api/axios'
import Swal from 'sweetalert2'
export default {
  name: 'Home',
  data () {
    return {
      location: 'default',
      start_date: '',
      end_date: ''
    }
  },
  computed: {
    provinsi () {
      return this.$store.state.provinsi
    }
  },
  methods: {
    searchCar (location) {
      if (this.location === 'default') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Anda belum tentukan lokasi pemesanan',
          footer: 'Silahkan tentukan lokasi pemesanan terlebih dahulu!'
        })
      } else {
        if (this.start_date === '' || this.end_date === '') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Anda belum tentukan tanggal pemesanan',
            footer: 'Silahkan tentukan tanggal pemesanan terlebih dahulu!'
          })
        } else {
          this.getCarsByLocation(location)
          this.$store.commit('start_date', this.start_date)
          this.$store.commit('end_date', this.end_date)
          this.$store.commit('location', this.location)
        }
      }
    },
    getCarsByLocation (location) {
      axios({
        method: 'POST',
        url: 'rentals',
        data: { address: location }
      })
        .then(data => {
          console.log(data, ' ini datanyaaa')
          if (data.data[0]) {
            this.$store.commit('CarByLoc', data)
            this.$router.push('/detailsCar')
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Mohon maaf, persediaan mobil belum ada untuk wilayah ini.'
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.$store.commit('setCarByLoc', [])
    this.$store.commit('start_date', '')
    this.$store.commit('end_date', '')
    this.$store.commit('location', '')
    this.$store.commit('car', [])
  }
}
</script>
