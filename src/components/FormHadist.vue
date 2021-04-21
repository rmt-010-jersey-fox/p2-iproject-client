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
          <form @submit.prevent="searchHadist">
            <div class="mb-3">
              <label for="kitab-hadist" class="form-label" style="color: white">Kitab Hadist:</label>
            <input
              type="text"
              class="form-control"
              v-model="kitab"
              placeholder="abu-daud, ahmad, bukhari, darimi, ibnu-majah, nasai, malik, muslim"
              required
            />
            <div class="form-text" style="color: white">Kitab yang tersedia : abu-daud, ahmad, bukhari, darimi, ibnu-majah, nasai, malik, muslim</div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label" style="color: white">Nomor Hadist:</label>
              <input
                type="text"
                class="form-control"
                v-model="nomor"
                placeholder="input number 1-4000"
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
      kitab: '',
      nomor: ''
    }
  },
  methods: {
    searchHadist () {
      const payload = {
        kitab: this.kitab,
        nomor: this.nomor
      }

      this.$store.dispatch('getHadist', payload)
    }
  }
}
</script>

<style>

</style>
