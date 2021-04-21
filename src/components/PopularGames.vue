<template>
  <div class="col-lg-9">
	<div class="central-meta">
		<h2 class="create-post">Popular Games</h2>
		<div class="row">
            <PopularGameCard
            v-for="popularGame in popularGames"
            :key="popularGame.id"
            :popularGame="popularGame"
            />
		</div>
	</div>
</div>
</template>

<script>
import PopularGameCard from './PopularGameCard'
import { mapState } from 'vuex'
export default {
  name: 'PopularGames',
  components: { PopularGameCard },
  computed: {
      ...mapState(['popularGames'])
  }
}
</script>

<style>

</style>