<template>
  <div
    class="card bg-dark text-white m-3 border-0 rounded-0"
    style="width: 11rem;"
  >
    <img class="card-img" :src="photo.imageUrl" alt="Card image" />
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: ["photo"]
};
</script>

<style></style>
