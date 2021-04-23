<template>
  <section>
		<div class="gap2 gray-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="row merged20" id="page-contents">
							<div class="user-profile">
								<figure>
									<!-- <div class="edit-pp">
										<label class="fileContainer">
											<i class="fa fa-camera"></i>
											<input type="file">
										</label>
									</div> -->
									<img src="http://wpkixx.com/html/pitnik/images/resources/fav-banner.jpg" alt="">									
									<div class="profile-controls">
										<a href="#" title="Like" data-toggle="tooltip"><i class="fa fa-calendar-check"></i></a> &nbsp;
										<a href="#" title="Follow" data-toggle="tooltip">20-20-2020</a>
									</div>
								</figure>
								
								<div class="profile-section">
									<div class="row">
										<div class="col-lg-12">
											<div class="profile-author">
												<a class="profile-author-thumb" href="about.html">
													<img alt="author" src="http://wpkixx.com/html/pitnik/images/resources/fav-dp.jpg">
													<!-- <div class="edit-dp">
														<label class="fileContainer">
															<i class="fa fa-camera"></i>
															<input type="file">
														</label>
													</div> -->
												</a>
												<!-- <div class="author-content">
													<a class="h4 author-name" href="#">Ocean Motel</a>
													<div class="country">Ontario, CA</div>
												</div> -->
											</div>
										</div>
										<!-- <div class="col-lg-10"> -->
											<!-- <ul class="profile-menu">
												<li>
													<a class="" href="fav-page.html">Page Feed</a>
												</li>
												<li>
													<a class="" href="fav-favers.html">Followers</a>
												</li>
												<li>
													<a class="" href="fav-events.html">Events</a>
												</li>
											</ul> -->
											<!-- <ol class="folw-detail">
												<li><span>Posts</span><ins>101</ins></li>
												<li><span>Followers</span><ins>1.3K</ins></li>
												<li><span>Members</span><ins>22k</ins></li>
											</ol> -->
										<!-- </div> -->
									</div>
								</div>	
							</div><!-- user profile banner  -->
							<div class="col-lg-3">
								<aside class="sidebar static left">	
									<div class="widget">
										<h4 class="widget-title">Your page</h4>	
										<div class="your-page">
											<ol class="folw-detail pl-3">
												<li><span>Posts</span><ins>101</ins></li>
												<li><span>Thread</span><ins>1.3K</ins></li>
											</ol>
										</div>
									</div>
									<!-- page like widget -->
									<!-- <div class="widget">
										<h4 class="widget-title">Page Community</h4>
										<ul class="fav-community">
											<li><i class="fa fa-address-card"></i> About <p>We are motel hotel from Los Angeles, now based in San Francisco, come and enjoy!</p></li>
											<li><i class="fa fa-users"></i><a href="#" title="">invite friends</a> to like this page</li>
											<li><i class="fa fa-thumbs-up"></i>13,33,454 People like this</li>
											<li><i class="fa fa-rss"></i>13,33,454 People follow this</li>
											<li><i class="fa fa-share-alt"></i>13,540 People share this</li>
											<li><i class="fa fa-bookmark"></i><a href="#" title="">category</a> Entertainment</li>
											<li><i class="fa fa-globe"></i><a href="https://wpkixx.com/" title="">www.wpkixx.com</a></li>
											<li><i class="fa fa-map-marker"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="763915131718291b1902131a360f1903041b171f1a5815191b">[email&#160;protected]</a></li>
										</ul>
									</div> -->
									<!-- Page Community-->
									
								</aside>
							</div><!-- sidebar -->
							<div class="col-lg-9">
								<div class="central-meta">
									<div class="tab-pane fade active show" id="edit-profile">
										<div class="set-title">
											<h5>Edit Profile</h5>
											<span>People on Pitnik will get to know you with the info below</span>
										</div>
										<div class="setting-meta">
											<div class="change-photo">
												<figure><img src="http://wpkixx.com/html/pitnik/images/resources/frnd-figure3.jpg" alt=""></figure>
												<div class="edit-img">
													<form class="edit-phto">

														<label class="fileContainer">
															<i class="fa fa-camera-retro"></i>
															Chage DP
														<input type="file">
														</label>
													</form>
												</div>
											</div>
										</div>
										<div class="stg-form-area">
											<form method="post" class="c-form">
												<div>
													<label>Display Name</label>
													<input type="text" placeholder="Jack Carter">
												</div>

												<div class="uzer-nam">
													<label>User Name</label>
													<input type="text" placeholder="jackcarter4023">
												</div>
												<div>
													<label>Email Address</label>
													<input type="text" placeholder="abc@pitnikmail.com">
												</div>
												<div>
													<label>Gender</label>
													<div class="form-radio">
													  <div class="radio">
														<label>
														  <input type="radio" checked="checked" name="radio"><i class="check-box"></i>Male
														</label>
													  </div>
													  <div class="radio">
														<label>
														  <input type="radio" name="radio"><i class="check-box"></i>Female
														</label>
													  </div>
														<div class="radio">
														<label>
														  <input type="radio" name="radio"><i class="check-box"></i>Custom
														</label>
													  </div>
													</div>
												</div>
												<div>
													<label>about your profile</label>
													<textarea rows="3" placeholder="write someting about yourself"></textarea>
												</div>	
												<div>
													<button type="submit" data-ripple="">Cancel</button>
													<button type="submit" data-ripple="">Save</button>
												</div>
											</form>
										</div>
									</div><!-- edit profile -->
								</div>
							</div><!-- centerl meta -->
						</div>	
					</div>
				</div>
			</div>
		</div>	
	</section><!-- content -->
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style>
.profile-controls{
	background: rgb(255 255 255) none repeat scroll 0 0;
}
</style>