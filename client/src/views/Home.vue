<template>
  <div class="home">
    <!-- HEADER -->
    <div>
        <img src="https://cars.usnews.com/pics/size/640x420/static/images/article/202006/128503/216702_New_Volvo_XC40_-_exterior_640x420.jpg" class="img" alt="Responsive image" style="width: 100%; height: 50vh;">
    </div>
    <!-- FORM CARI MOBIL -->
    <div class="search-car border border-secondary">
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
                      <label for="input-location">Lokasi Sewa Mobil</label>
                      <select id="input-location" class="form-control">
                        <option selected disabled>----- Pilih Lokasi -----</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="form-group">
                        <label for="select-cars">Tipe / Merk Mobil</label>
                        <select id="select-cars" class="form-control">
                          <option selected disabled>----- Pilih Tipe / Merek Mobil -----</option>
                          <option>...</option>
                        </select>
                      </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="startBook">Tanggal Mulai Sewa</label>
                        <input type="date" class="form-control" id="startBook">
                      </div>
                      <div class="form-group col-md-2">
                        <label for="time-start">Pukul</label>
                        <input type="text" class="form-control" id="time-start">
                      </div>
                      <div class="form-group col-md-4">
                        <label for="startBook">Tanggal Selesai Sewa</label>
                        <input type="date" class="form-control" id="startBook">
                      </div>
                      <div class="form-group col-md-2">
                        <label for="time-start">Pukul</label>
                        <input type="text" class="form-control" id="time-start">
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Cari Mobil</button>
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
  name: 'Home'
}
</script>
