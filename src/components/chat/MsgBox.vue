<template>
  <div id="msgBox" class="mesgs container row">
    <div class="msg_history">
      <IncomingMsg/>
      hgfhgfhfdkjsasdkjfskj=====
    </div>
    <div class="type_msg align-self-end">
      <div class="write_msg">
        <input type="text" class="p-1" placeholder="type a message" v-model="inputMsg">
        <button class="send-btn btn" type="button">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsgBox',
  data () {
    return {
      inputMsg: ''
    }
  },
  methods () {
    this.$store.commit('PUSH_MSG')
  }
}
</script>

<style scoped>
#msgBox {
  background: greenyellow;
  height: 80vh;
}
</style>
