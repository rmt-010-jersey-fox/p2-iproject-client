<template>
  <div class="container py-6 px-6">
    <div class="level mt-6">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">Form Pendaftaran Akun</p>
          <p class="heading">Rumah Sakit H-8</p>
        </div>
      </div>
    </div>
    <FormRegister />
  </div>
</template>

<script>
  import FormRegister from "./components/Form";
  export default {
    name: "register",
    components: {
      FormRegister,
    },
  };
</script>

<style></style>
