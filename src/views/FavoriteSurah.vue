<template>
  <!-- Daftar List Al-Quran Favorite -->
<div class="container mb-5">
  <div class="row border-radius shadow" style="background-color: #EBF9F8">
      <div class="text-center mt-4">
        <h1 style="font-weight: bold; color: #3e9ca5" >My Favorites Surah</h1>
        <hr class="garis-gelap">
      </div>
    <!-- Card Surah -->
    <div class="row text-center">
      <div class="col-3 mb-3 border-radius">
        <div class="card border-radius shadow" style="width: 16rem;">
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold;">1. Surah Al-Fatihah (Pembuka)</h5>
            <p class="card-text">Makkiyah</p>
            <p class="card-text">Jumah : 7 Ayat</p>
            <div>
              <a href="#" class="btn btn-warning btn-sm"><i class="bi bi-book-half"></i> Read</a>
              <a href="#" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i> Remove</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FavoriteSurah'
}
</script>

<style>

</style>
