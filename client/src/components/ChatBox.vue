<template>
<div class="container">
  <h1 class="text-center">Public Chat</h1>
  <MainChat></MainChat>
</div>
</template>

<script>
import MainChat from './MainChat'
export default {
  name: 'ChatBox',
  components: {
    MainChat
  }
}
</script>

<style scoped>
div.container{
    background-color: white;
    width: 100%;
    /* padding-bottom: 95px;
    padding-top: 10px;
    padding-left: 50px;
    padding-right: 50px; */
    margin:2px auto 2px auto;
    position: relative;
    bottom: 20px
}
</style>
