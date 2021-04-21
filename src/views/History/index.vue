<template>
  <div class="container">
    <div class="level mt-6">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">Rekam Medis</p>
          <p class="heading">Rumah Sakit H-8</p>
        </div>
      </div>
    </div>
    <div class="level mb-6">
      <div class="level-item has-text-centered">
        <div>
          <TableHistory />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  import TableHistory from "./components/Table";
  export default {
    name: "History",
    components: { TableHistory },
  };
</script>

<style></style>
