<template>
  	<div class="col-lg-6 col-md-6">
		<div class="dig-pro">
			<figure>
				<img :src="popularGame.background_image" alt="">
                <div class="rate">
					<!-- <ol class="pit-rate">
						<li class="rated"><i class="fa fa-star"></i></li>
						<li class="rated"><i class="fa fa-star"></i></li>
						<li class="rated"><i class="fa fa-star"></i></li>
						<li class="rated"><i class="fa fa-star"></i></li>
						<li class=""><i class="fa fa-star"></i></li>
					</ol> -->
					<!-- <span class="qeemat"><del>60</del>$40</span> -->
                    <center>
                        <h4><a href="product-detail.html" title="">{{ popularGame.name }}</a></h4>
                    </center>
				</div>
                <!-- <div class="digi-meta"> -->
                    <!-- <p>Full E-Marketing for your digital product with cheap budget using social media </p> -->
                <!-- </div> -->
			</figure>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PopularGameCard',
  props: ['popularGame']
}
</script>

<style>

</style>