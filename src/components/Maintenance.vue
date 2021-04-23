<template>
	<div class="col-lg-9">
      <section>
		<div class="central-meta item">
			<div class="user-post">
				<div class="friend-info">
					<figure>
						<img :src="thread.User.image" alt="" >
					</figure>
					<!-- <figure v-if="!thread">
						<img src="https://mediate.co.id/wp-content/uploads/2021/01/user-icon-600x600.jpg" alt="" v-if="!thread">
					</figure> -->
					<div class="friend-name">
						<!-- <ins  v-if="thread"><a title="">{{ thread.User.fullname }}</a></ins> -->
						<ins  v-if="!thread"><a title=""></a></ins>
						<span v-if="getPublished">published: {{ getPublished }}</span>
					</div>
					
					<div class="post-meta">
						<figure>
							<img v-if="thread.image" :src="thread.image" alt="">
							<img v-if="!thread.image" src=""  alt="">
						</figure>	
						<!-- <figure>
						</figure>	 -->
						<div class="description">
							<center> <h1>{{ thread.title }}</h1> </center> 
							{{ thread.content }}
						</div>
						<!-- <div class="description">
							<center> <h1></h1> </center> 
						</div> -->
						
						<div class="we-video-info">
						</div>	
					</div>
					<!-- <div class="coment-area" style="display: block">
						<ul class="we-comet">
							<li>
								<div class="comet-avatar">
									<img src="images/resources/comet-1.jpg" alt="">
								</div>
								<div class="we-comment">
									<h5><a href="time-line.html" title="">Jason borne</a></h5>
									<p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel</p>
									<div class="inline-itms">
										<span>1 year ago</span>
										<a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
										<a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
									</div>
								</div>
							</li>
							<li>
								<div class="comet-avatar">
									<img src="images/resources/comet-2.jpg" alt="">
								</div>
								<div class="we-comment">
									<h5><a href="time-line.html" title="">Sophia</a></h5>
									<p>we are working for the dance and sing songs. this video is very awesome for the youngster.
										<i class="em em-smiley"></i>
									</p>
									<div class="inline-itms">
										<span>1 year ago</span>
										<a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
										<a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
									</div>
								</div>
							</li>
							<li>
								<a href="#" title="" class="showmore underline">more comments+</a>
							</li>
							<li class="post-comment">
								<div class="comet-avatar">
									<img src="images/resources/comet-2.jpg" alt="">
								</div>
								<div class="post-comt-box">
									<form method="post">
										<textarea placeholder="Post your comment"></textarea>
										<div class="add-smiles">
											<div class="uploadimage">
												<i class="fa fa-image"></i>
												<label class="fileContainer">
													<input type="file">
												</label>
											</div>
											<span class="em em-expressionless" title="add icon"></span>
											<div class="smiles-bunch">
												<i class="em em---1"></i>
												<i class="em em-smiley"></i>
												<i class="em em-anguished"></i>
												<i class="em em-laughing"></i>
												<i class="em em-angry"></i>
												<i class="em em-astonished"></i>
												<i class="em em-blush"></i>
												<i class="em em-disappointed"></i>
												<i class="em em-worried"></i>
												<i class="em em-kissing_heart"></i>
												<i class="em em-rage"></i>
												<i class="em em-stuck_out_tongue"></i>
											</div>
										</div>
										<button type="submit"></button>
									</form>	
								</div>
							</li>
						</ul>
					</div> -->
				</div>
			</div>
		</div>
	</section>
	  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Thread',
  computed: {
	  ...mapState(['thread']),
	  getPublished() {
		  if(!this.getThread){
			  return ''
		  } else {
			  return this.getThread.createdAt.split('T').join(' ')
		  }
	  },
	  getThread() {
		  if(!this.thread){
			  return { User: { fullname: 'dummy', image: 'dummy'}, image: 'dummy', title: 'dummy', content: 'dummy', createdAt: 'dummy'}
		  } else {
			  return this.thread
		  }
	  }
  }
}
</script>

<style>

</style>