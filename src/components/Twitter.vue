<template>
  <div style="width: 50%">
    <div class="card bg-light">
      <div class="card-body">
        <h6 class="card-title text-uppercase text-truncate py-2">
          Whats Up With this Game??
        </h6>
        <div class="items border border-light">
          <!-- CARD HASIL LOOPING TERGANTUNG CATEGORY -->
          <div>

            <div class="card-body p-2">
              Ini nanti twitter isinya
            </div>

          </div>
          <br />
        </div>
      </div>
      <button @click.prevent="changePage('addpage')" type="button" class="btn btn-dark">ReloadTweet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwitterBox'
}
</script>

<style>

</style>