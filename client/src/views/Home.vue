<template>
  <div class="home">
    <!-- HEADER -->
    <div>
        <img src="../assets/10851.jpg" class="img" alt="Responsive image" style="margin-top:95px; width: 100%; ">
    </div>
    <!-- FORM CARI MOBIL -->
    <div class="search-car border border-secondary" style="margin-top:25px">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sewa Lepas Kunci</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Sewa dengan Sopir</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <form>
                    <div class="form-group">
                      <label>Lokasi Sewa Mobil</label>
                      <select v-model="location" class="js-example-basic-single form-control">
                        <option value="default" selected="selected" disabled>--- choose ---</option>
                        <option v-for="(prov, idx) in provinsi" :key="idx" :value="prov">{{ prov }}</option>
                      </select>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Tanggal Mulai Sewa</label>
                        <input type="date" class="form-control" v-model="start_date">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="startBook">Tanggal Selesai Sewa</label>
                        <input type="date" class="form-control" v-model="end_date">
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="searchCar(location)">Cari Mobil</button>
                  </form>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      location: 'default',
      start_date: '',
      end_date: ''
    }
  },
  computed: {
    provinsi () {
      return this.$store.state.provinsi
    }
  },
  methods: {
    searchCar (location) {
      this.$store.dispatch('getCarsByLocation', { location })
      this.$router.push('/detailsCar')
    }
  }
}
</script>
