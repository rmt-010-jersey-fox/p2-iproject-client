<template>
  <div class="col-lg-3">
    <aside class="sidebar static left">
      <div class="friend-box">
        <figure>
          <img alt="" src="https://image.freepik.com/free-vector/cluster-explosion-night-retro-cartoon-with-bright-flame-colored-blasts-against-black-background-vector-illustration_98292-3515.jpg">
        </figure>
        <div class="frnd-meta">
          <img alt="" :src="user.image" width="90" v-if="user.image">
          <img src="https://mediate.co.id/wp-content/uploads/2021/01/user-icon-600x600.jpg" v-if="!user.image" alt="" width="90">
          <div class="frnd-name">
            <a title="" href="#">{{ user.fullname }}</a>
            <span>@{{ user.username }}</span>
          </div>
          <!-- <a class="main-btn2" href="#" title="">Follow</a> -->
        </div>
        <ul class="menu-list">
          <!-- <li><a href="#" title="" data-ripple=""><i class="fa fa-home"></i>Home</a></li> -->
          <li><a @click.prevent="$router.push({ name: 'MyThreadsList' }).catch(()=>{})" title="" data-ripple=""><i class="fa fa fa-comment"></i>My Threads</a></li>
          <li><a @click.prevent="$router.push({ name: 'MyThreadsList' }).catch(()=>{})" title="" data-ripple=""><i class="fa fa fa-calendar-day"></i>My Events</a></li>
          <li><a @click.prevent="$router.push({ name: 'EventsList' }).catch(()=>{})" title="" data-ripple=""><i class="fa fa-calendar-alt"></i>Events</a></li>
          <li><a @click.prevent="$router.push({ name: 'ThreadList' }).catch(()=>{})" title="" data-ripple=""><i class="fa fa-fire"></i>Hot Thread</a></li>
          <li><a @click.prevent="$router.push({ name: 'PopularGames' }).catch(()=>{})" title="" data-ripple=""><i class="fa fa-gamepad"></i>Popular Games in 2021</a></li>
        </ul>
      </div>
      <!-- <div class="widget">
        <div class="top-comunitez">
          <figure>
            <img src="https://image.freepik.com/free-vector/stylish-digital-neon-lights-banner_1017-19901.jpg"  alt="">
            <span>Today's Top Games</span>
          </figure>
          <ol class="top-comuty" style="list-style-type:none;">
            <GameList
            v-for="(game, id) in games"
            :key="id"
            :game="game"
            />
          </ol>
        </div>
      </div> -->
    </aside>	
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import GameList from './GameList'
export default {
  name: 'Aside',
  components: {},
  computed: {
    ...mapState([ 'user'])
  },
  methods: {}
}
</script>

<style>

</style>