<template>
  <!-- <div class="row">
    <div class="col-4 border-bottom-0">
      <b-container class="bv-example-row">
        <b-row>
          <h1>Chat Is Available</h1>
          <hr>
          <div class="w-100"></div>
          <b-col>Column</b-col>
        </b-row>
      </b-container>
    </div>
    <div class="col-7">
      <b-container class="bv-example-row">
        <b-row>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis incidunt, voluptatibus eius dolor
            nihil debitis, architecto accusamus vel ipsum blanditiis odit sapiente numquam possimus aspernatur!</p>
          <hr>
          <div class="w-100"></div>
          <div class="col-10">
            <form>
              <input style="border-radius:5px" class="form-control" type="text"
                placeholder="Type a message">
            </form>
          </div>
          <div class="col-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M21.426,11.095l-17-8c-0.35-0.164-0.763-0.113-1.061,0.133C3.066,3.473,2.937,3.868,3.03,4.242l1.212,4.849L12,12 l-7.758,2.909L3.03,19.758c-0.094,0.374,0.036,0.77,0.335,1.015C3.548,20.923,3.772,21,4,21c0.145,0,0.29-0.031,0.426-0.095l17-8 C21.776,12.74,22,12.388,22,12S21.776,11.26,21.426,11.095z"></path></svg>
          </div>
        </b-row>
      </b-container>
    </div>
  </div> -->
  <div class="content-bg">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="col-md-4 bg-white ">
          <div class=" row border-bottom padding-sm" style="height: 40px;">
            Stay Safe Guys!!!
            <a href="" class="anchorLogout" @click.prevent="logout">leave</a>
          </div>
          <div class="setFlowFriend">
           <h1>qwedqwd</h1>
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
              <!-- <li class="right clearfix">
                <span class="chat-img pull-right">
                  <img src="https://bootdey.com/img/Content/user_1.jpg" alt="User Avatar">
                </span>
                <div class="chat-body clearfix">
                  <div class="header">
                    <strong class="primary-font">Sarah</strong>
                    <small class="pull-right text-muted"><i class="fa fa-clock-o"></i> 13 mins ago</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
                    ullamcorper ligula sodales at.
                  </p>
                </div>
              </li> -->
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
      // this.$store.commit('getMessage', data)
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
  body {
  padding-top: 0;
  font-size: 12px;
  color: #777;
  background: #0C121E;
  font-family: 'Open Sans',sans-serif;
  margin-top:20px;
}

.anchorLogout{
  position: relative;
  left: 28vh;
  text-decoration: none;
  color: black;
  font-weight: 700px;
}

.bg-white {
  background-color: #fff;
}

.friend-list {
  list-style: none;
margin-left: -40px;
}
small, .small {
  font-size: 85%;
}

.friend-list li a .chat-alert {
  position: absolute;
  right: 8px;
  top: 27px;
  font-size: 10px;
  padding: 3px 5px;
}

.chat-message {
  background: #f9f9f9;
  padding-right: 30px;
  overflow: auto;
  max-height: 350px ;
}

.chat {
    list-style: none;
    margin: 0;
}

.setting {
 background-color: #f9f9f9;
 height: 350px;
}

.chat li img {
  width: 45px;
  height: 45px;
  border-radius: 50em;
  -moz-border-radius: 50em;
  -webkit-border-radius: 50em;
}

img {
  max-width: 100%;
}

.chat-body {
  padding-bottom: 20px;
}

.chat li.left .chat-body {
  margin-left: 70px;
  background-color: #fff;
}

.chat li .chat-body {
  position: relative;
  font-size: 11px;
  padding: 10px;
  border: 1px solid #f1f5fc;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
  -moz-box-shadow: 0 1px 1px rgba(0,0,0,.05);
  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
}

.chat li .chat-body .header {
  padding-bottom: 5px;
  border-bottom: 1px solid #f1f5fc;
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
  border-top: 1px solid #f1f5fc;
  border-left: 1px solid #f1f5fc;
  content: '';
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
}

.chat li.right .chat-body:before {
  position: absolute;
  top: 10px;
  right: -8px;
  display: inline-block;
  background: #fff;
  width: 16px;
  height: 16px;
  border-top: 1px solid #f1f5fc;
  border-right: 1px solid #f1f5fc;
  content: '';
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}

.chat li {
  margin: 15px 0;
}

.chat li.right .chat-body {
  margin-right: 70px;
  background-color: #fff;
}

.chat-box {
/*
  position: fixed;
  bottom: 0;
  left: 444px;
  right: 0;
*/
  padding: 15px;
  border-top: 1px solid #eee;
  transition: all .5s ease;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -ms-transition: all .5s ease;
  -o-transition: all .5s ease;
}

.primary-font {
  color: #3c8dbc;
}

a:hover, a:active, a:focus {
  text-decoration: none;
  outline: 0;
}
</style>
