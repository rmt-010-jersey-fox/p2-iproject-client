<template>
      <!-- Form Jadwal Solat -->
    <div class="container">
      <div class="row">
        <div class="col border-radius shadow" style="background-color: #EBF9F8">
          <h3 class="text-center mt-3" style="font-weight: bold; color: #3e9ca5">Jadwal Solat</h3>
          <hr style="border: 2px solid #3e9ca5" />
          <h4>Date: 21/04/2021</h4>
          <h4>Location: Jakarta</h4>
          <table class="table text-center">
            <thead style="background-color: #3e9ca5">
              <tr>
                <th scope="col">Imsak</th>
                <th scope="col">Subuh</th>
                <th scope="col">Terbit</th>
                <th scope="col">Dhuha</th>
                <th scope="col">Zuhur</th>
                <th scope="col">Ashar</th>
                <th scope="col">Magrib</th>
                <th scope="col">Isya</th>
              </tr>
            </thead>
            <tbody style="background-color: white">
              <tr>
                <td>04:27</td>
                <td>04:37</td>
                <td>05:50</td>
                <td>06:18</td>
                <td>11:55</td>
                <td>15:14</td>
                <td>17:53</td>
                <td>19:03</td>
              </tr>
            </tbody>
          </table>
          <div class="row mb-3">
            <div class="col mb-2">
              Cek jadwal daerah lain:
            </div>
            <form action="" class="row">
              <div class="col">
                <input type="text" class="form-control" id="input-kota" placeholder="Nama Kota">
              </div>
              <div class="col">
                <input type="date" class="form-control" id="input-tanggal" placeholder="Tanggal">
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
  name: 'JadwalSolat'
}
</script>

<style>

</style>
