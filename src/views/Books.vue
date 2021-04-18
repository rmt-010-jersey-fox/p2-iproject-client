<template>
  <!--START CATALOG LIST  -->
  <section id="catalog">
    <H1 class="text-center">Product List</H1>
    <div class="container">
      <div class="row" id="catalogCard">
        <!-- awal loop -->
        <div class="col-3 mt-4">
          <div class="card overflow-auto" style="height:70vh">
            <img src="https://storage.googleapis.com/du-prd/books/images/9781421589602.jpg" class="card-img-top" alt="...">
            <div class="card-body ">
              <h5 class="card-title">THE LEGEND OF ZELDA: LEGENDARY EDITION, VOL. 2</h5>
              <p class="card-text">The adaptation of several story arcs from Nintendo’s Zelda video game series continues. In this volume, the Oracle of Seasons.</p>
              <span class="card-text"><strong>Author: </strong>Akira Himekawa</span><br>
              <span class="card-text"><strong>Publisher: </strong>VIZ Media</span><br>
              <p class="card-text"><strong>ISBN: </strong>1421589605</p>
              <p>Buy :<a href="${productURL}" target="_blank"> Amazon </a></p>
            </div>
          </div>
          <div class="card text-center ">
            <button  class="btn btn-primary">Add To Wish List</button>
          </div>
        </div>
        <!-- akhir loop -->
      </div>
    </div>
  </section>
  <!-- END CATALOG LIST -->
</template>

<script>
export default {

}
</script>

<style>

</style>
