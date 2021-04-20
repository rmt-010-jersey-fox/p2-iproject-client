<template>
  <!-- REGISTER -->
    <div class="w3-cell-row register" style="margin-top: 30px;">
      <div class="w3-container w3-cell" style="padding: 50px;">
        <div class="row register-toptext">
          <h2 style="font-weight: bolder; color: yellow">Bergabung jadi member SewaMobil.com dan nikmati beragam keuntungannya!</h2>
          <h5 style="color: white">Daftar via registrasi yang mudah dan aman untuk berbagai keuntungan berikut:</h5>
        </div>
        <div class="row reward">
          <div class="col" style="padding-right: 50px;">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530611739902-f842496c03a0da13f009612ca38b671d.svg?tr=q-75" alt="">
            <h5 style="font-weight: bolder; color: gold">Poin untuk Tiap Pemesanan</h5>
            <p style="color: white">Dapatkan Poin saat memesan mobil. Tukar untuk diskon perjalanan dan berbagai kupon reward!</p>
          </div>

          <div class="col">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530611748295-e4aeb162c550ac0871337edb53a8a08d.svg?tr=q-75" alt="">
            <h5 style="font-weight: bolder; color: gold">Kenyamanan Ekstra Setelah Pemesanan</h5>
            <p style="color: white">Pilih kursi saat check-in melalui aplikasi dan gunakan fitur refund/reschedule jika ada perubahan rencana terbang atau menginap.</p>
          </div>
        </div>
        <div class="row reward">
          <div class="col" style="padding-right: 50px;">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530611746199-2965f73ada3e780f295517523e2573b3.svg?tr=q-75" alt="">
            <h5 style="font-weight: bolder; color: gold">Transaksi Non-tunai dengan travelokaPay</h5>
            <p style="color: white">Transaksi aman dan nyaman dengan Saldo UANGKU atau Kartu Saya. Persiapkan juga pengeluaran bulanan dan traveling Anda dengan PayLater</p>
          </div>
          <div class="col">
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530611737727-07b960a3c0f14f1bbf6f52bbd6b371cf.svg?tr=q-75" alt="">
            <h5 style="font-weight: bolder; color: gold">Pesan Tanpa Repot</h5>
            <p style="color: white">Set Notifikasi Harga untuk pesan saat waktu yang tepat. Pesan lebih cepat saat bepergian bersama dengan Passenger Quick Pick.</p>
          </div>
        </div>
      </div>

    <!-- FORM -->
      <div class="w3-container w3-cell" style="width: 700px; padding: 50px;">
        <div class="row set-color">
          <h2 style="padding:30px 180px;"><strong>Form Register</strong></h2>
            <div class="container" >
              <form>
                <div class="row">
                  <div class="col-50">
                    <div class="row">
                      <div class="col-50">
                        <label><i class="fa fa-user"></i> First Name</label>
                        <input v-model="firstName" type="text" placeholder="input first name ...">
                      </div>
                      <div class="col-50">
                        <label><i class="fa fa-user"></i> Last Name</label>
                        <input v-model="lastName" type="text" placeholder="input last name ...">
                      </div>
                    </div>
                    <label>Gender</label>
                    <select v-model="gender">
                      <option value="" selected="selected" disabled>--choose--</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    <label><i class="fa fa-envelope"></i> Email</label>
                    <input v-model="email" type="text" placeholder="input your email ...">
                    <label><i class="fa fa-envelope"></i> Password</label>
                    <input v-model="password" type="password" id="email" name="email" placeholder="input your password ...">
                    <label><i class="fa fa-address-card-o"></i> Address</label>
                    <input v-model="address" type="text" placeholder="input your address ...">
                    <label><i class="fa fa-phone"></i> Phone</label>
                    <input v-model="phone" type="text" placeholder="input your phone ...">
                  </div>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="register">Register</button>
              </form>
            </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from '../../api/axios'
import Swal from 'sweetalert2'
export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      address: '',
      phone: ''
    }
  },
  methods: {
    register () {
      axios({
        method: 'POST',
        url: 'register',
        data: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          gender: this.gender,
          address: this.address,
          phone: this.phone
        }
      })
        .then(data => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Register successfully, continue with login!',
            showConfirmButton: false,
            timer: 1500
          })
          this.firstName = ''
          this.lastName = ''
          this.email = ''
          this.password = ''
          this.gender = ''
          this.address = ''
          this.phone = ''
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
    }
  }

}
</script>

<style>

</style>
