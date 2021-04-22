<template>
  <div>
    <Navbar/>
      <div class="container-fluid my-3" style="background-color: rgba(245, 245, 245, 0.4);">
        <div class="block-1 my-3">
          <form @submit.prevent="chat()">
            <div class="row my-3">
              <div class="col-10">
                <div class="form-group">
                  <input type="text" class="form-control"
                  placeholder="type your messages here"
                  v-model='chatText'
                  >
                </div>
              </div>
              <div class="col-1 button">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from 'vue-hacktiv-footer'
import axios from '../axios/axios'
import Swal from 'sweetalert2'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      chatText: '',
      chats: []
    }
  },
  methods: {
    chat () {
      axios({
        method: 'POST',
        url: '/chats',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          chat: this.chatText
        }
      })
        .then(() => {
          this.getChats()
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    getChats () {
      axios({
        method: 'GET',
        url: '/chats',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.chats = data
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            title: response.data.message.toUpperCase()
          })
        })
    },
    created () {
      this.getChats()
    }
  }
}
</script>

<style scoped>
.block-1 {
  height: 85vh
}

.footer {
  background-color: white;
}
</style>
