<template>
  <!--? Menu -->
  <section>
    <div id="menu" class="container" style="background-color: #0A0A0A;">
      <div class="row" style="height: 5rem;">
        <div class="col-12">
          <div class="row text-center">
            <div id="dropdown" class="dropdown">
              <!-- <button class="btn btn-danger dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" style="width: 10rem;">
                Genre
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Adventure</a></li>
                <li><a class="dropdown-item" href="#">FPS</a></li>
              </ul> -->

              <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" style="width: 10rem;">
                Platform
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Playstation</a></li>
                <li><a class="dropdown-item" href="#">Xbox</a></li>
                <li><a class="dropdown-item" href="#">Steam</a></li>
                <li><a class="dropdown-item" href="#">Uplay</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="container col-6">
          <div id="trending-games" class="item">
            <a href="#" class="mt-2">Trending Games</a>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryBar'
}
</script>

<style scoped>
</style>
