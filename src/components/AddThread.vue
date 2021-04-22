<template>
  <div class="modal fade" id="addThreadModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <!-- <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="fa fa-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div class="modal-body">
           <div class="forum-form">
                <div class="central-meta">
                    <form @submit.prevent="addThread" class="c-form">
                        <div>
                            <label>Title</label>
                            <input type="text" v-model="title" placeholder="Title">
                        </div>
                        <div>
                            <center>
                                <img :src="image" alt="" width="300">
                            </center>
                            <label>Image</label>
                            <input type="text" v-model="image" placeholder="Image">
                        </div>
                        <div>
                            <label>Info</label>
                            <textarea rows="3"  v-model="content" placeholder="write someting"></textarea>
                        </div>
                        <!-- <div>
                            <label>Game Category</label>                           


                        </div> -->
                        <div>
                            <button class="main-btn" type="submit" data-ripple="">Post Thread</button>
                            <button class="main-btn3" type="button" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import $ from 'jquery'
import { mapState } from 'vuex'
export default {
  name: 'AddThread',
  components: {},
  data () {
      return {
          title: '',
          image: '',
          content: '',
          GameId: ''
      }
  },
  computed: {
      ...mapState(['games'])
  },
  methods: {
      addThread() {
          const { title, image, content, GameId } = this
          const data = { title, image, content, GameId }
          this.$store.dispatch('addThread', data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Thread has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          $('.main-btn3').click()
      }
  }

}
</script>

<style>

</style>