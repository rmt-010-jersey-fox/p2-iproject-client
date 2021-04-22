<template>
  <div class="container">
    <div class="row" v-for="(indoCase,i) in showCaseIndo" :key="i">
      <div class="col-md-3">
        <div class="card card-1">
          <p>Positif</p>
          <h3>{{indoCase.positif}}</h3>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card card-2">
          <p>Sembuh</p>
          <h3>{{indoCase.sembuh}}</h3>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card card-3">
          <p>Dirawat</p>
          <h3>{{indoCase.dirawat}}</h3>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card card-4">
          <p>Meninggal</p>
          <h3>{{indoCase.meninggal}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indonesian',
  computed: {
    showCaseIndo () {
      return this.$store.state.IndoCase
    }
  },
  created () {
    this.$store.dispatch('showIndoCase')
  }
}
</script>

<style scoped>
  body {
    font-family: 'Nunito', sans-serif;
    padding: 50px;
  }

  .card {
    border-radius: 4px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
    padding: 14px 80px 28px 36px;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.15);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
  }

  .card h3 {
    font-weight: 600;
  }

  .card img {
    position: absolute;
    top: 20px;
    right: 15px;
    max-height: 120px;
  }

  .card-1 {
    background: #306CE8;
    background-image: url(https://cdn.dribbble.com/users/2392101/screenshots/5399243/orang_batuk.gif);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100px;
  }

  .card-2 {
    background: #F7CCCB;
    background-image: url(https://cdn.dribbble.com/users/1019864/screenshots/13987038/media/8510681c7e14bc3062e59b0aa49fbbf5.gif);
    background-repeat: no-repeat;
    /* background-position: right; */
    background-position: 6.3em;
    background-size: 220px;
  }

  .card-3 {
    background: #26477A;
    background-image: url(https://cdn.dribbble.com/users/2025439/screenshots/4058822/ml_gif3.gif);
    background-repeat: no-repeat;
    background-position: 4em;
    background-size: 200px;
  }

  .card-4 {
    background: #C5D55B;
    background-image: url(https://cdn.dribbble.com/users/1044993/screenshots/14475789/media/b5d8ccd26925c66b8c3193d19f955c78.png?compress=1&resize=1000x750);
    background-repeat: no-repeat;
    background-position: 6.3em;
    background-size: 180px;
  }

  @media(max-width: 990px) {
    .card {
      margin: 20px;
    }
  }
</style>
