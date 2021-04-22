<template>
  <div class="start">
      <a
      v-if="gameQuestion == ''"
       class='start' href='' @click.prevent="start">Loading</a>
      <a
      v-if="gameQuestion !== ''"
       class='start' href='' @click.prevent="start">Start</a>
		</div>
</template>

<script>
export default {
    name:'Start',
    methods:{
        async start(){
            try{
                
                await this.$store.commit('gameStatus')
                var start = new Audio(require('../assets/sound/lets_play.mp3'))
                start.play()

            }catch(err){

            }
        }
    },
    computed:{
        gameQuestion(){
            return this.$store.state.gameQuestion;
        }
    }

}
</script>

<style>

</style>