<template>
    <div  style="margin-top:95px; padding-top:35px; background-color: #e6eaed; height: 115vh">
        <!-- Booking detail -->
    <div class="w3-col l8 s12" style="margin-left: 250px; width: 900px;">
      <!-- Mobil yg di pick -->
      <div class="w3-card-4 w3-margin w3-white" style="padding: 40px">
        <div class="w3-container">
        <img :src="car.imgUrl" alt="Nature" class="w3-right" style="width:50%">
          <h2 style="font-weight: bolder; color: #0770cd">{{ car.type }}</h2><hr>
          <h5>Disediakan oleh <strong>{{car.Rental.name}}</strong><br></h5>
          <p style="background-color: #f2f3f3; border-radius:5px; padding: 5px 10px; width:220px;">Tahun Mobil : {{car.year}}</p>
          <p style="background-color: #f2f3f3; border-radius:5px; padding: 5px 10px; width: 220px">Warna Mobil : {{car.color}}</p><br>
        </div>

        <div class="w3-container">
          <h4 style="font-weight: bolder;">Info Rental</h4><hr>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337305794-3dd7650e41feb67c75ade207c01461ed.svg?tr=q-75" width="35px" style="padding-right:10px">PIC: {{car.Rental.pic}}</p>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337305794-3dd7650e41feb67c75ade207c01461ed.svg?tr=q-75" width="35px" style="padding-right:10px">Telepon: {{car.Rental.phone}}</p>

          <p><img src="https://cdn.pixabay.com/photo/2018/02/14/03/25/envelope-3152053_960_720.png" width="35px" style="padding-right:10px">Email: {{car.Rental.email}}</p>

          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360738177-1056069448e7097b8a8cdbab9398fe14.png?tr=q-75" width="35px" style="padding-right:10px">Alamat: {{car.Rental.address}}</p>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/02/1525248725632-7f7810165bb84dc945b71f5ee58c0f84.png?tr=q-75" width="35px" style="padding-right:10px">No. Rekening : {{car.Rental.bank_account}}</p>

          <h4 style="font-weight: bolder">Syarat dan Ketentuan</h4>
          <hr>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/10/18/1571395400484-f4cdbb668f36ce17c1fe513d6b0a35ad.png?tr=q-75,w-24" width="35px" style="padding-right:10px">Asuransi Mobil</p>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/10/18/1571395347661-5a779af15ae0cfae8c27b6716053de3c.png?tr=q-75,w-24" width="35px" style="padding-right:10px">Customer Service 24 jam</p>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/10/18/1571395188391-f761bc1595cc628ef560e57a6c354565.png?tr=q-75,w-24" width="35px" style="padding-right:10px">Syarat Rental</p>
          <ul style="margin-left: 20px;">
            <li>KTP/Paspor</li>
            <li>SIM A/SIM International</li>
            <li>Deposit</li>
            <li>Lainnya (jika penyedia perlu verifikasi tambahan</li>
          </ul>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/10/18/1571395292753-ccba0f5b33ec554d01cad803cd5ba1f0.png?tr=q-75,w-24" width="35px" style="padding-right:10px">Kembalikan bensin seperti semula</p>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/10/18/1571395238774-060edf5ea66302305e34e9ce57f70089.png?tr=q-75,w-24" width="35px" style="padding-right:10px">Penggunaan hingga 24 jam per hari rental</p>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/28/1603886306964-44520fc08eab307bd5b1e0aa42a19fac.png?tr=q-75,w-24" width="35px" style="padding-right:10px">Bisa Refund</p>
          <p><img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/28/1603885915086-80f3ce6936e5eeb44182b979e9236539.png?tr=q-75,w-24" width="35px" style="padding-right:10px">Bisa Reschedule</p>
        </div>
      </div>
    </div>

    <!-- Detail Rental dan Pembayaran -->
    <div class="w3-col l4" style="width: 500px;">
      <!-- Location -->
      <div class="w3-card w3-margin w3-white">
        <div class="w3-containe" style="padding: 40px">
          <p><span class="w3-tag"><strong>!</strong></span>     <span><b>Sebelum memesan, anda harus menyematkan lokasi terkini anda</b></span></p>
          <p><button @click.prevent="getLocation" class="w3-button w3-block w3-margin-bottom" style="margin-top:30px; background-color: rgb(255, 94, 31); border-radius: 5px; font-weight:bolder; color: white"><b>Dapatkan Lokasi Anda</b></button></p>
          <div class="mapouter">
            <iframe :src="'https://maps.google.com/maps?q='+latitude+','+longitude+'&z=15&output=embed'" width="100%" height="350" frameborder="0" style="border:0">
            </iframe>
          </div>
        </div>
      </div><hr>

      <!-- Pembayaran -->
      <div class="w3-card w3-margin w3-white">
        <div class="w3-containe" style="padding: 40px">
          <h2 class="w3-center" style="font-weight: bolder; color: #0770cd">Informasi Pembayaran</h2><hr>
          <p>Pemesanan dilakukan pada : <br> tanggal <strong>{{ start_date }}</strong> sampai dengan tanggal <strong>{{ end_date }}</strong></p>
          <p>Harga per hari : <strong>{{ formatRupiah(car.price)}}</strong></p>
          <hr>
          <h4>Harga Total</h4>
          <h2 class=" w3-right" style="color: rgb(255, 94, 31); font-weight: bolder; margin-top: 0">{{ formatRupiah(car.price*(end_date.split('-')[2] - start_date.split('-')[2]))}}</h2>
          <button @click.prevent="booking({CarId: car.id, start_date, end_date, location})" class="w3-button w3-block w3-margin-bottom" style="margin-top:30px; background-color: rgb(255, 94, 31); border-radius: 5px; font-weight:bolder; color: white">PESAN SEKARANG</button>
        </div>
      </div>

    </div>
    </div>
</template>

<script>
import axios from '../../api/axios'
import Swal from 'sweetalert2'
export default {
  name: 'Booking Detail',
  data () {
    return {
      location: 'default',
      latitude: '',
      longitude: ''
    }
  },
  computed: {
    car () {
      return this.$store.state.car
    },
    start_date () {
      return this.$store.state.start_date
    },
    end_date () {
      return this.$store.state.end_date
    },
    total () {
      const mulai = this.start_date.getDate()
      const akhir = this.end_date.getDate()
      return mulai - akhir
    }
  },
  methods: {
    formatRupiah (angka) {
      var reverse = angka.toString().split('').reverse().join('')
      var ribuan = reverse.match(/\d{1,3}/g)
      ribuan = ribuan.join('.').split('').reverse().join('')
      return `Rp. ${ribuan},-`
    },
    booking (obj) {
      axios({
        method: 'POST',
        url: 'transaction',
        headers: { access_token: localStorage.getItem('access_token') },
        data: { CarId: obj.CarId, start_date: obj.start_date, end_date: obj.end_date, location: obj.location }
      })
        .then(data => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Booking sukses',
            text: 'Admin kami akan segera mengubungi anda',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: err
          })
          console.log(err)
        })
    },
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      } else {
        console.log('Geolocation is not supported by this browser.')
      }
    },
    showPosition (position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      this.location = `${this.latitude}, ${this.longitude}`
    }
  }

}
</script>

<style>

</style>
