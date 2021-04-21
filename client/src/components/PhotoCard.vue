<template>
  <div
    class="card bg-dark text-white m-3 border-0 rounded-0"
    style="width: 11rem;height: 11rem;"
  >
    <img class="h-100 sized-image" :src="photo.imageUrl" alt="Card image" />
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: ['photo']
}
</script>

<style>
.sized-img {
  object-fit: cover;
}
</style>
