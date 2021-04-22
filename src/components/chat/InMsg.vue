<template>

<div class="row card m-1">
  <div class="card-body p-0">
    <div>
        <img style="width:25px" :src="`https://avatars.dicebear.com/api/gridy/${m.UserId}.svg`" alt="">
    </div>
    <div class="receivedMsg">
      <div>
        <p class="mb-0">{{m.inputMsg}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'InMsg',
  props: ['m']
}
</script>

<style>

</style>
