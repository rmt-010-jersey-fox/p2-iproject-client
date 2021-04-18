<template>
      <!-- START FORM LOGIN -->
  <form >
    <div class="container">
      <h3 class="mb-4 text-success">Log In</h3>
      <div class="mb-3 col-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control">
      </div>
      <div class="mb-3 col-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control">
      </div>
      <div class="d-flex col-3">
        <button type="submit" class="btn btn-primary" style="width:250px; height:40px">Sign In</button><br>
      </div>
      <div class="d-flex col-3">
         <!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin> -->

      </div>
    </div>
  </form>
  <!-- END FORM LOGIN -->
</template>

<script>
export default {

}
</script>

<style>

</style>