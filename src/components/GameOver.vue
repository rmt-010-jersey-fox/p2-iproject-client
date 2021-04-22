<template>
  <div class="end">
      <a
      
       class='end'  >Game Over</a>

       <p></p>
      <a class="end"
       @click.prevent="play" href=''>Play Again</a>
		</div>
</template>

<script>
export default {
    name:'GameOver',
    methods:{
        play(){
            this.$store.dispatch('getQuestion','easy')
            this.$store.commit('setGameStatus',0)
            this.$store.commit('lockAnswer','')
            this.$store.commit('isConfirmed',false)
             this.$store.commit('fiftyFifty',0)
            this.$store.commit('callAFriend',0)
            this.$store.commit('askAudience',0)


        }
    },
    
}
</script>

<style>

</style>