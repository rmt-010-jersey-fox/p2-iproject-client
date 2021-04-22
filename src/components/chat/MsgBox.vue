<template>
  <div id="msgBox" class="container d-flex flex-column">
    <div id="chat">
      <h5>Live Chat!</h5>
    </div>
    <p v-if="!msg.length">** No Chats Available **</p>
    <div class="msg_history">
      <InMsg v-for="m in msg" :key="m.id" :m="m"/>
    </div>
    <div class="mt-3">
      <div class="write_msg">
        <input type="text" class="p-1" placeholder="type message" v-model="inputMsg" @keyup.enter="addMsg">
        <button class="send-btn btn" type="button" @click.prevent="addMsg">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InMsg from './InMsg'
export default {
  name: 'MsgBox',
  components: {
    InMsg
  },
  data () {
    return {
      inputMsg: ''
    }
  },
  methods: {
    addMsg () {
      const inputMsg = this.inputMsg
      const UserId = localStorage.UserId
      const input = { UserId, inputMsg }
      // this.$store.commit('PUSH_MSG', input)
      this.inputMsg = ''
      this.$socket.emit('addMsg', input)
    }
  },
  computed: {
    msg () {
      return this.$store.state.messages
    }
  },
  sockets: {
    broadcastMsg (data) {
      this.$store.commit('PUSH_MSG', data)
    }
  }
}
</script>

<style scoped>
#msgBox {
  background: #583d72;
  height: 70vh;
  overflow: scroll;
  margin-top: 160px;
}
#chat {
  background: blueviolet;
  color: beige;
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
}
.send-btn {
  background: #fff;
  margin: 5px;
}
.write_msg {
    padding: 5px;

}
</style>
