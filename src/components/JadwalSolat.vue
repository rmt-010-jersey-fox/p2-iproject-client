<template>
      <!-- Form Jadwal Solat -->
    <div class="container">
      <div class="row">
        <div class="col border-radius shadow" style="background-color: #EBF9F8">
          <h3 class="text-center mt-3" style="font-weight: bold; color: #3e9ca5">Jadwal Solat</h3>
          <hr style="border: 2px solid #3e9ca5" />
          <h4>Date: {{ jadwalSolat.data.jadwal.tanggal }}</h4>
          <h4>Location: {{jadwalSolat.data.lokasi}}</h4>
          <table class="table text-center">
            <thead style="background-color: #3e9ca5">
              <tr>
                <th scope="col">Imsak</th>
                <th scope="col">Subuh</th>
                <th scope="col">Terbit</th>
                <th scope="col">Dhuha</th>
                <th scope="col">Zuhur</th>
                <th scope="col">Ashar</th>
                <th scope="col">Maghrib</th>
                <th scope="col">Isya</th>
              </tr>
            </thead>
            <tbody style="background-color: white">
              <tr>
                <td>{{jadwalSolat.data.jadwal.imsak}}</td>
                <td>{{jadwalSolat.data.jadwal.subuh}}</td>
                <td>{{jadwalSolat.data.jadwal.terbit}}</td>
                <td>{{jadwalSolat.data.jadwal.dhuha}}</td>
                <td>{{jadwalSolat.data.jadwal.dzuhur}}</td>
                <td>{{jadwalSolat.data.jadwal.ashar}}</td>
                <td>{{jadwalSolat.data.jadwal.maghrib}}</td>
                <td>{{jadwalSolat.data.jadwal.isya}}</td>
              </tr>
            </tbody>
          </table>
          <div class="row mb-3">
            <div class="col mb-2">
              Cek jadwal daerah lain:
            </div>
            <form @submit.prevent="getJadwalSolat" class="row">
              <div class="col">
                <input type="text" class="form-control" id="input-kota" placeholder="Nama Kota" v-model="place">
              </div>
              <div class="col">
                <input type="date" class="form-control" id="input-tanggal" placeholder="Tanggal" v-model="date">
              </div>
              <div class="col">
                <button type="submit" class="btn btn-warning">Lihat</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'JadwalSolat',
  props: ['jadwalSolat'],
  data () {
    return {
      place: '',
      date: ''
    }
  },
  methods: {
    getJadwalSolat () {
      const payload = {
        place: this.place,
        date: this.date
      }
      this.$store.dispatch('getJadwalSolat', payload)
    },
    created () {
      this.getJadwalSolat()
    },
    methods: {
      getJadwalSolat () {
        this.$store.dispatch('getJadwalSolat')
      }
    }
  }
}
</script>

<style>

</style>
