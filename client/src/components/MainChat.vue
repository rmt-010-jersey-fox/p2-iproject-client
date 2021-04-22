<template>
  <div class="content-bg">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="col-md-4 bg-white ">
          <div class=" row border-bottom padding-sm announ" style="height: 40px;">
            Stay Safe Guys!!!
            <a href="" class="anchorLogout" @click.prevent="logout">leave</a>
          </div>
          <div class="illuStyle">
            <img src="https://cdn.dribbble.com/users/2063956/screenshots/8558603/media/68d31a991fac79eccf0b888f88f1efdb.gif" alt="" width="430px" style="position:relative;top:20px;right:25px">
          </div>
        </div>

        <div class="col-md-8 bg-white">
          <div class="setting">
          <div class="chat-message">
              <ul class="chat" v-for="(message, i) in messages" :key="i">
              <li class="left clearfix">
                <span class="chat-img pull-left">
                  <img :src="`https://avatars.dicebear.com/api/male/${message.name}.svg`">
                </span>
                <div class="chat-body clearfix">
                  <div class="header">
                    <strong class="primary-font">{{message.name}}</strong>
                  </div>
                  <p>
                    {{message.msg}}
                  </p>
                </div>
              </li>
            </ul>
            </div>
          </div>
          <!-- msg send -->
          <div class="chat-box bg-white">
            <div class="input-group">
              <input class="form-control border no-shadow no-rounded" @keyup.enter="sendMessage" v-model="inputMessage" placeholder="Type your message here">
              <span class="input-group-btn">
                <button class="btn btn-success no-rounded ml-1" type="button" @click="sendMessage">Send</button>
              </span>
            </div><!-- /input-group -->
          </div>
          <!-- end of msg send -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainChat',
  data () {
    return {
      inputMessage: ''
    }
  },
  sockets: {
    sendBackMessage (data) {
      this.$store.commit('getMessage', data)
    }
  },
  methods: {
    sendMessage () {
      const data = {
        name: localStorage.getItem('username'),
        msg: this.inputMessage
      }
      this.$socket.emit('sendMessage', data)
      this.inputMessage = ''
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Home' })
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  }
}
</script>

<style scoped>
.announ {
  font-weight: 600;
  color: #2073A7;
}

.anchorLogout{
  position: relative;
  left: 28vh;
  text-decoration: none;
  color: red;
  text-transform: uppercase;
  font-weight: 600;
}

.chat-message {
  background: #fff;
  padding-right: 30px;
  overflow: auto;
  max-height: 350px ;
}

.chat {
    list-style: none;
    margin: 0;
}

.setting {
 background-color: #fff;
 height: 350px;
}

.chat li img {
  width: 45px;
  height: 45px;
  border-radius: 50em;
  -moz-border-radius: 50em;
  -webkit-border-radius: 50em;
}

.chat li.left .chat-body {
  margin-left: 70px;
  background-color: #fff;
}

.chat li .chat-body {
  position: relative;
  font-size: 11px;
  padding: 10px;
  border: 1.3px solid #000;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
  -moz-box-shadow: 0 1px 1px rgba(0,0,0,.05);
  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
}

.chat li .chat-body .header {
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
}

.chat li .chat-body p {
  margin: 0;
}

.chat li.left .chat-body:before {
  position: absolute;
  top: 10px;
  left: -8px;
  display: inline-block;
  background: #fff;
  width: 16px;
  height: 16px;
  border-top: 1px solid #843E4D;
  border-left: 1px solid #843E4D;
  content: '';
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
}

.chat li {
  margin: 15px 0;
}

.chat-box {
  padding: 15px;
  border-top: 1px solid #fff;
  transition: all .5s ease;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -ms-transition: all .5s ease;
  -o-transition: all .5s ease;
}

.primary-font {
  color: #3c8dbc;
  font-size: 14px;
}

a:hover, a:active, a:focus {
  text-decoration: none;
  outline: 0;
}
</style>
