<template>
    <!-- Form Search Quran -->
  <div class="container mt-5 mb-5">
    <div class="row shadow" >
      <div class="col-6">
        <img class="border-radius" src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" style="height: 400px;">
      </div>
      <div class="col-6 border-radius shadow" style="background-color: #3e9ca5">
        <h3 class="text-center mt-3" style="color: white; font-weight: bold">Cari Surah</h3>
        <hr style="border: 3px solid rgb(255, 255, 255)" />
        <form @submit.prevent="searchSurah">
          <div class="mb-3">
            <label for="surah" class="form-label" style="color: white; font-weight: bold">Surat:</label>
            <input
              type="number"
              class="form-control"
              v-model="surah"
              placeholder="Input number 1 - 114"
              required
            />
            <div class="form-text" style="color: white">Referensi nomor surat (1-114) <a style="color: white" target="_blank" href="https://id.wikipedia.org/wiki/Surah">Link</a></div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label" style="color: white;font-weight: bold">Nomor Ayat:</label>
            <input
              type="number"
              class="form-control"
              placeholder="Input number or empty"
              v-model="ayat"
            />
            <div class="form-text" style="color: white"> Jika ingin melihat full surah kosongkan nomor ayat</div>
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
  name: 'FormSurah',
  data () {
    return {
      surah: '',
      ayat: ''
    }
  },
  methods: {
    searchSurah () {
      const payload = {
        surah: this.surah,
        ayat: this.ayat
      }

      this.$store.dispatch('getSurah', payload)
    }
  }
}
</script>

<style>

</style>
