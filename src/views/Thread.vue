<template>
<div class="modal fade" id="threadModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <!-- <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="btn btn-primary" class="fa fa-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div class="modal-body">
    		<section>
		<div class="central-meta item">
			<div class="user-post">
				<div class="friend-info">
					<figure>
						<img :src="thread.User.image" alt="">
					</figure>
					<div class="friend-name">
						<div class="more">
							<div class="more-post-optns"><i class="ti-more-alt"></i>
								<ul>
									<li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
									<li><i class="fa fa-trash-o"></i>Delete Post</li>
									<li><i class="fa fa-flag"></i>Report</li>
									<li><i class="fa fa-address-card-o"></i>Boost This Post</li>
									<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									<li><i class="fa fa-wpexplorer"></i>Select as featured</li>
									<li><i class="fa fa-bell-slash-o"></i>Turn off Notifications</li>
								</ul>
							</div>
						</div>
						<ins><a href="time-line.html" title="">{{ thread.User.fullname }}</a></ins>
						<span>published: {{ getPublished }}</span>
					</div>
					
					<div class="post-meta">
						<figure>
							<img :src="thread.image" alt="">
						</figure>	
						<div class="description">
							<center> <h1>{{ thread.title }}</h1> </center> 
							{{ thread.content }}
						</div>
						
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
		</div>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Thread',
  computed: {
	  ...mapState(['thread']),
	  getPublished() {
		  return this.thread.createdAt.split('T').join(' ')
	  }
  }
}
</script>

<style>

</style>