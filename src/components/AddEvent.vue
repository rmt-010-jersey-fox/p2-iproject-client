<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <!-- <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="fa fa-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div class="modal-body">
           <div class="forum-form">
                <div class="central-meta">
                    <form @submit.prevent="addEvent" class="c-form">
                        <div>
                            <label>Title</label>
                            <input type="text" v-model="title" placeholder="Title..">
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
                            <textarea rows="3" type="textarea" v-model="content" placeholder="write someting"></textarea>
                        </div>
                        <div>
                            <label>Date</label>
                            <input type="datetime-local" v-model="date" placeholder="Jack Carter, william, ">
                        </div>
                        <div>
                            <label>Location</label>
                            <input type="text" v-model="location" placeholder="Location...">
                        </div>
                        <!-- <div>
                            <label>Category Game</label>
                            <select v-model">
                                <option 
                                v-for="game in games"
                                :key="game.id"
                                :value="game.id">{{ game.name }}</option>
                            </select>
                        </div> -->
                        <div>
                            <button class="main-btn" type="submit" data-ripple="">Post Topic</button>
                            <button class="main-btn3" type="button" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
        </div>
    </div>
  </div>
</template>

<script>
// import {gmapApi} from 'vue2-google-maps'
import $ from 'jquery'
// import { mapState } from 'vuex'
export default {
  name: 'AddEvent',
  data () {
      return {
        //   map: null
        title: '',
        image: '',
        content: '',
        location: '',
        date: ''
      }
  },
//   computed: {
//       ...mapState(['games'])
//   },
  methods: {
      addEvent() {
          const { title, image, content, location, date } = this
          const data = { title, image, content, location, date } 
        //   console.log(data)
        this.$store.dispatch('addEvent', data)
        $('.main-btn3').click()
      }
  }
}


</script>

<style>

</style>