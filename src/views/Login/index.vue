<template>
  <div class="container py-6" style="margin-left: 300px; margin-right: 300px">
    <div class="level mt-6">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">Form Login</p>
          <p class="heading">Rumah Sakit H-8</p>
        </div>
      </div>
    </div>
    <FormLogin />
  </div>
</template>

<script>
  import FormLogin from "./components/Form";
  export default {
    name: "Login",
    components: {
      FormLogin,
    },
  };
</script>

<style></style>
