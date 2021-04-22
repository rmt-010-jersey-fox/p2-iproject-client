<template>
  <div class="col-md-3 mt-3 mb-1">
    <div class="card text-white bg-dark">
      <img :src="lat.thumbnailPotrait" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{lat.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted ">Genre</h6>
          <h6 class=" card-title">{{lat.detail.genre}}</h6>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestMovie',
  props: ['lat']
}
</script>

<style>

</style>
