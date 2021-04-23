<template>
<div>
  <div>
  <Navbar />
  </div>
  <div class="main">
    <div class="row">
        <div class="col-md-4">
            <div class="one">
                <div class="px-3 pb-4">
                    <div><img src="https://img.icons8.com/bubbles/50/000000/blond-short-hair-lady-with-blue-glasses.png" width="15" class="pic1" /><img src="https://img.icons8.com/bubbles/50/000000/girl-with-chemical-test-tube.png" width="22" class="pic2" /></div>
                    <div><img src="https://img.icons8.com/bubbles/100/000000/girl-with-glasses-art-palette.png" width="65" /></div>
                    <div><img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-gem.png" width="16" class="pic3" /><img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="16" class="pic4" /></div>
                    <div>
                        <b-button v-b-modal.modal-add-todos><h4 class="project">Add new trip + </h4></b-button>
                    </div>
                    <div>
                        <p class="quote">Still not enough? Click on a tile to add a new trip.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
      <UserTrips v-for="trip in userTrips" :key="trip.id"
      :trip="trip" style="margin: 10px;"/>
    </div>
    <Modal />
  </div>
</div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import UserTrips from '@/components/UserTrips.vue'
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Modal,
    UserTrips,
    Navbar
  },

  computed: {
    ...mapState({
      userTrips: 'userTrips'
    })
  },

  created () {
    this.$store.dispatch('showAllTrips')
  }
}
</script>

<style>

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
}

.one {
    width: 270px;
    background-color: #000;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-right: 50px;
}

.pic1 {
    position: relative;
    right: 22px;
    top: 23px
}

.pic2 {
    position: relative;
    left: 25px;
    top: 17px
}

.pic3 {
    position: relative;
    right: 13px;
    bottom: 18px
}

.pic4 {
    position: relative;
    left: 14px;
    bottom: 21px
}

.project {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #1f1d1d;
    margin-bottom: 0;
}

.quote {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #fff
}

.two {
    width: 270px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

.star {
    font-size: 20px !important;
    color: #b1b4b7
}

.dot {
    font-size: 20px !important;
    color: #b1b4b7
}

.round {
    border-radius: 50%;
    background-color: #eee;
    width: 33px;
    height: 33px;
    margin-bottom: -10px;
    align-items: center;
    justify-content: center
}

.name {
    font-size: 22px;
    color: #464e56;
    font-weight: 600;
    text-align: left
}

.quote2 {
    font-size: 12px;
    font-weight: 500;
    color: #868e94;
    text-align: left
}

.img1 {
    position: relative;
    left: 20px;
    z-index: 28;
    border: 0.5px solid #6ebde4;
    border-radius: 50%;
    background-color: #bcd8e6
}

.img2 {
    position: relative;
    left: 10px;
    z-index: 29;
    border: 0.5px solid #6ebde4;
    border-radius: 50%;
    background-color: #bcd8e6
}

.img3 {
    z-index: 30;
    border: 0.5px solid #6ebde4;
    border-radius: 50%;
    background-color: #bcd8e6
}

.task {
    color: #727475
}

.date {
    color: #727475
}

.imgfix {
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    top: 2px
}
</style>
