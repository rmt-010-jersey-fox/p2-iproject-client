<template>
  <!-- Gallery item -->
    <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img :src="picture.src.original" alt="" class="img-fluid card-img-top">
        </div>
    </div>
    <!-- End -->
</template>

<script>
export default {
  name: 'DiscoverCard',
  props: ['picture']
}
</script>

<style>

</style>
