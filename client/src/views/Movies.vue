<template>
  <div id="Movies">
    <Navbar/>
    <div class="carousel relative shadow-2xl bg-white">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div id="upcoming" class="block h-full w-full text-blue text-5xl text-center">Doraemon: Stand By Me 2</div>
        </div>
        <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div id="popular" class="block h-full w-full bg-orange-500 text-blue text-5xl text-center">One Pieace stampede</div>
        </div>
        <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div id="latest" class="block h-full w-full bg-green-500 text-blue text-5xl text-center">Si Juki</div>
        </div>
        <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
            <li class="inline-block mr-3">
                <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
                <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
                <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
        </ol>

      </div>
    </div>

    <div>
      <h1 class="text-center ml-5 text-6xl mt-24">Popular</h1>
    </div>
    <!-- CARDS POPULAR-->
    <div class="container px-5 py-24 mx-auto mr-10">
      <div class="flex flex-wrap -m-4 ">
        <DetailCards
          v-for="result in result"
          :key="result.id"
          :result="result"
        ></DetailCards>
      </div>
    </div>

    <!-- Cards TOPRATED-->
    <div>
      <h1 class="text-center ml-5 text-6xl mt-24">TopRated</h1>
    </div>
    <!-- CARDS -->
    <div class="container px-5 py-24 mx-auto mr-10">
      <div class="flex flex-wrap -m-4 ">
        <DetailCards2
          v-for="resultRated in resultRated"
          :key="resultRated.id"
          :resultRated="resultRated"
        ></DetailCards2>
      </div>
    </div>

    <!-- CARDS LATEST -->
    <div>
      <h1 class="text-center ml-5 text-6xl mt-24">Upcoming</h1>
    </div>
    <!-- CARDS -->
    <div class="container px-5 py-24 mx-auto mr-10">
      <div class="flex flex-wrap -m-4 ">
        <DetailCards3
          v-for="resultUpcoming in resultUpcoming"
          :key="resultUpcoming.id"
          :resultUpcoming="resultUpcoming"
        ></DetailCards3>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import DetailCards from '../components/DetailCards'
import DetailCards2 from '../components/DetailCards2'
import DetailCards3 from '../components/DetailCards3'
export default {
  name: 'Movies',
  components: { Navbar, DetailCards, DetailCards2, DetailCards3 },
  computed: {
    result () {
      return this.$store.state.result
    },
    resultRated () {
      return this.$store.state.resultRated
    },
    resultUpcoming () {
      return this.$store.state.resultUpcoming
    }
  },
  methods: {
    DetailCards () {
      return this.$store.dispatch('fetchDataPopular')
    },
    DetailCards2 () {
      return this.$store.dispatch('fetchDataTopRated')
    },
    DetailCards3 () {
      return this.$store.dispatch('fetchDataUpcoming')
    }
  },
  created () {
    this.DetailCards()
    this.DetailCards2()
    this.DetailCards3()
  }
}
</script>

<style>
  #Movies {
    background-color: #DFDBE5;
    background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
  #upcoming {
    background-image: url('../assets/doraemon.jpg');
    background-size: cover;
    background-position: 100px -150px;
  }
  #popular {
    background-image: url('../assets/onepiece.jpg');
    background-size: cover;
    background-position: 100px -150px;
  }
  #latest {
    background-image: url('../assets/juki-poster-1.jpg');
    background-size: cover;
    background-position: 100px -150px;
  }
  .carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet
{
  color: #2b6cb0;
}
</style>
