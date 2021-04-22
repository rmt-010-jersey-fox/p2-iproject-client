<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card card-1">
            <p>Case Confirmed</p>
            <h3>{{confirmedCase}}</h3>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-2">
            <p>Case Positive</p>
            <h3>{{positive}}</h3>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-3">
            <p>Case Recovered</p>
            <h3>{{recovered}}</h3>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-4">
            <b-button v-b-modal.modal-scrollable style="position:relative;top:30px;left:1.5em">See Country</b-button>
            <b-modal id="modal-scrollable" scrollable title="Only Show Active Case Greater Than 1000">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Country</th>
                    <th scope="col">Confirmed Case</th>
                    <th scope="col">Active</th>
                    <th scope="col">Death</th>
                    <th scope="col">Recovered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(globalCase,i) in showCaseGlobal" :key="i">
                    <th scope="row">{{i+1}}</th>
                    <td>{{globalCase.Country}}</td>
                    <td>{{globalCase['Confirmed Cases']}}</td>
                    <td>{{globalCase['Death Cases']}}</td>
                    <td>{{globalCase['Active Cases']}}</td>
                    <td>{{globalCase.Recovered}}</td>
                  </tr>
                </tbody>
              </table>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'global',
  computed: {
    showCaseGlobal () {
      return this.$store.state.GlobalCase
    },
    confirmedCase () {
      return this.$store.state.confirmedCase
    },
    recovered () {
      return this.$store.state.recoveredCase
    },
    positive () {
      return this.$store.state.positiveCase
    }
  },
  created () {
    this.$store.dispatch('showGlobalCase')
  }
}
</script>

<style scoped>
  .container{
    position:relative;
    top: 120px;
    }
  .card {
    border-radius: 4px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
    padding: 60px 80px 60px 36px;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.15);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
  }

  .card h3 {
    font-weight: 700;
  }

  .card h3, .card p {
    color: white;
  }
  .card p{
    font-weight: 700;
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
    padding-bottom: 102px;
  }

  @media(max-width: 990px) {
    .card {
      margin: 20px;
    }
  }
</style>
