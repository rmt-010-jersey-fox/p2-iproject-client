<template>

<div class="card text-white bg-dark m-1 col">
    <div class="card-body p-0">
      <div><img style="width:20px" :src="`https://avatars.dicebear.com/api/bottts/${m.id}.svg`" alt="">
    </div>
      <div class="receivedMsg">
        <div>
          <p>{{m.inputMsg}}</p>
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
