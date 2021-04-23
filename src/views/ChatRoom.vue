<template>
<div>
<Navbar />
<div class="row rounded-lg overflow-hidden shadow">
  <UserBox />
    <div class="col-7 px-0">
      <div class="px-4 py-5 chat-box bg-white">
        <MessageCards v-for="(msg, i) in messages"
        :key="i" :message="msg"/>
      </div>
      <form action="#" class="bg-light">
        <div class="input-group">
          <input type="text" v-model="inputMsg"
          placeholder="Type a message"
          aria-describedby="button-addon2"
          class="form-control rounded-0 border-0 py-4 bg-light"
          @keyup.enter.prevent="sendMessage">
        </div>
      </form>
    </div>
  </div>
</div>

</template>

<script>
import UserBox from '@/components/UserBox.vue'
import MessageCards from '@/components/MessageCards.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'ChatRoom',
  components: {
    UserBox,
    MessageCards,
    Navbar
  },
  data () {
    return {
      inputMsg: '',
      listUser: []
    }
  },
  sockets: {
    broadcastMsg (data) {
      this.$store.commit('pushMessage', data)
    },
    sendAllUsers (users) {
      console.log(users)
      this.listUser = users
    }
  },
  methods: {
    sendMessage () {
      const payload = {
        username: localStorage.getItem('username'),
        message: this.inputMsg
      }
      this.$socket.emit('sendMessage', payload)
      // this.$store.commit('pushMessage', payload)
      this.inputMsg = ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  },

  created () {
    console.log(this.listUser)
  }
}
</script>

<style>

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  width: 5px;
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  width: 1em;
  background-color: #ddd;
  outline: 1px solid slategrey;
  border-radius: 1rem;
}

.text-small {
  font-size: 0.9rem;
}

.messages-box,
.chat-box {
  height: 510px;
  overflow-y: scroll;
}

.rounded-lg {
  border-radius: 0.5rem;
}

input::placeholder {
  font-size: 0.9rem;
  color: #999;
}
</style>
