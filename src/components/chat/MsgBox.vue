<template>
  <div id="msgBox" class="mesgs container row">
    <div class="msg_history">
      <InMsg v-for="m in msg" :key="m.id" :m="m"/>
    </div>
    <div class="type_msg align-self-end">
      <div class="write_msg">
        <input type="text" class="p-1" placeholder="type a message" v-model="inputMsg" @keyup.enter="addMsg">
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
      this.$store.commit('PUSH_MSG', input)
      this.inputMsg = ''
    }
  },
  computed: {
    msg () {
      return this.$store.state.messages
    }
  }
}
</script>

<style scoped>
#msgBox {
  background: greenyellow;
  height: 80vh;
}
</style>
