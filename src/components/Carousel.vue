<template>
      <main>
      <!-- Carousel -->
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style="height: 60vh">
            <img
              src="https://images.unsplash.com/photo-1596125160970-6f02eeba00d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              class="d-block w-100 img-fluid"
              alt="Al-Quran"
            />
            <div
              class="carousel-caption d-none d-md-block title-slide text-start"
            >
              <h1>Al-Quran</h1>
              <p>
                Kitab (Al-Qur'an) ini tidak ada keraguan padanya; petunjuk bagi
                <br />
                mereka yang bertakwa. (Q.S A-Baqarah: 2)
              </p>
              <p>
                <a class="btn btn-primer" href="#quran">Baca Quran</a>
              </p>
            </div>
          </div>
          <div class="carousel-item" style="height: 60vh">
            <img
              src="https://images.unsplash.com/photo-1573322867455-fc97c490c14c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              class="d-block w-100 img-fluid"
              alt="..."
            />
            <div
              class="carousel-caption d-none d-md-block title-slide text-start"
            >
              <h1>Al-Hadist</h1>
              <p>
                "Belajarlah kamu semua, dan mengajarlah kamu semua, dan <br />
                hormatilah guru-gurumu, serta berlaku baiklah terhadap orang
                <br />
                yang mengajarkanmu." (HR Tabrani)
              </p>
              <p>
                <a class="btn btn-primer" href="#hadist">Baca Hadist</a>
              </p>
            </div>
          </div>
          <div class="carousel-item" style="height: 60vh">
            <img
              src="https://images.unsplash.com/photo-1559353679-2693987e9656?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              class="d-block w-100 img-fluid"
              alt="..."
            />
            <div
              class="carousel-caption d-none d-md-block title-slide text-start"
            >
              <h1>Al-Quran</h1>
              <p>
                Maka ingatlah kepada-Ku, Aku pun akan ingat kepadamu.<br>
                Bersyukurlah kepada-Ku, dan janganlah kamu ingkar kepada-Ku.<br>
                (Q.S A-Baqarah: 152)
              </p>
              <p>
                <a class="btn btn-primer" href="#quran">Baca Quran</a>
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Fitur -->
      <div class="container mt-5 mb-5 text-center" style="height: 40vh">
        <div class="row">
          <div class="col animate__pulse">
            <img
              class="mb-3"
              src="../assets/Group.png"
              alt=""
              style="height: 150px"
            />
            <h4 style="color: #3e9ca5">Al-Quran</h4>
          </div>
          <div class="col">
            <img
              class="mb-3"
              src="../assets/icon-many-quran.svg"
              alt=""
              style="height: 150px"
            />
            <h4 style="color: #3e9ca5">Hadist</h4>
          </div>
          <div class="col">
            <img
              class="mb-3"
              src="../assets/icon-kabah.svg"
              alt=""
              style="height: 150px"
            />
            <h4 style="color: #3e9ca5">Jadwal Solat</h4>
          </div>
          <div class="col">
            <img
              class="mb-3"
              src="../assets/icon-hadits-open.svg"
              alt=""
              style="height: 150px"
            />
            <h4 style="color: #3e9ca5">Kumpulan Surah</h4>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style>

</style>
