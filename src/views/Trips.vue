<template>
  <div class="main">
    <div class="row">
        <div class="col-md-4">
            <div class="one">
                <div class="px-3 pb-4">
                    <div><img src="https://img.icons8.com/bubbles/50/000000/blond-short-hair-lady-with-blue-glasses.png" width="15" class="pic1" /><img src="https://img.icons8.com/bubbles/50/000000/girl-with-chemical-test-tube.png" width="22" class="pic2" /></div>
                    <div><img src="https://img.icons8.com/bubbles/100/000000/girl-with-glasses-art-palette.png" width="65" /></div>
                    <div><img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-gem.png" width="16" class="pic3" /><img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="16" class="pic4" /></div>
                    <div>
                        <b-button v-b-modal.modal-prevent-closing><h4 class="project">Add new trip + </h4></b-button>
                    </div>
                    <div>
                        <p class="quote">Still not enough? Click on a tile to add a new trip.</p>
                    </div>
                </div>
            </div>
            <div class="pt-2">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/emoji/48/000000/hedgehog-emoji.png" width="23" class="imgfix" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Hedgehogs</h3>
                        <p class="quote2">These cuties will need a new place where thay can live with their owner.</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Commercial project</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 01.10.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
          <UserTrips v-for="trip in userTrips" :key="trip.id"
          :trip="trip"/>
        </div>
        <div class="col-md-4">
            <div class="">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/cotton/64/000000/football-ball.png" width="23" class="imgfix" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Dressing Room</h3>
                        <p class="quote2">Wonderful news! Let's arrange the hosts and guest's dressing rooms!</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Commercial project</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 01.08.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
            <div class="pt-2">
                <div class="two">
                    <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                    <div class="px-3">
                        <div class="round"><img src="https://img.icons8.com/plasticine/100/000000/santas-hat.png" width="23" class="imgfix" /></div>
                    </div>
                    <div class="px-3 pt-3">
                        <h3 class="name">Ho, Ho, Ho!</h3>
                        <p class="quote2">Christmas is coming! will we try to prepare something for this occasion?</p>
                    </div>
                    <div class="d-flex justify-content-start px-3 align-items-center"> <i class="mdi mdi-view-comfy task"></i> <span class="quote2 pl-2">Task: Practice</span> </div>
                    <div class="d-flex justify-content-between px-3 align-items-center pb-3">
                        <div class="d-flex justify-content-start align-items-center"> <i class="mdi mdi-calendar-clock date"></i> <span class="quote2 pl-2">Date: 20.12.2020</span> </div>
                        <div class="d-flex justify-content-end"> <img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png" width="20" class="img1" /> <img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="20" class="img2" /> <img src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png" width="20" class="img3" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal />
</div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import UserTrips from '@/components/UserTrips.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Modal,
    UserTrips
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
    height: 100vh;
    align-items: center;
}

.one {
    width: 270px;
    background-color: #000;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
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
