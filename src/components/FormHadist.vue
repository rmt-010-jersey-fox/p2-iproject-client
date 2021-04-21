<template>
      <!-- Form Hadist Quran -->
    <div class="container mt-5 mb-5">
      <div class="row shadow">
        <div class="col-6">
          <img class="border-radius" src="../assets/hadist.jpg" alt="" style="height: 400px;">
        </div>
        <div class="col-6 shadow border-radius" style="background-color: #3e9ca5">
          <h3 class="text-center mt-3" style="color: white; font-weight: bold">Cari Hadist</h3>
          <hr style="border: 3px solid rgb(255, 255, 255)" />
          <form action="">
            <div class="mb-3">
              <label for="kitab-hadist" class="form-label" style="color: white">Kitab Hadist:</label>
              <select id="kitab-hadist" class="form-select" required>
                <option selected disabled>Select Hadist</option>
                <option value="bukhari">Bukhari</option>
                <option value="ahmad">Ahmad</option>
                <option value="muslim">Muslim</option>
                <option value="abu-daud">Abu Daud</option>
                <option value="darimi">Darimi</option>
                <option value="ibnu-maja">Ibnu Maja</option>
                <option value="nasai">Nasai</option>
                <option value="malik">Malik</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label" style="color: white">Nomor Hadist:</label>
              <input
                type="text"
                class="form-control"
                v-model="nomor"
                required
              />
            </div>
            <div class="col d-grid gap-2">
              <button type="submit" class="btn btn-warning">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FormHadist',
  data () {
    return {
      nomor: ''
    }
  }
}
</script>

<style>

</style>
