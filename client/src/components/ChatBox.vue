<template>
<div class="container">
  <h1 class="text-center title">Public Chat</h1>
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
    background-color: #fff;
    width: 100%;
    margin:2px auto 2px auto;
    position: relative;
    bottom: 20px
}

.title{
  font-weight: 600;
  color: #2073A7;
}
</style>
