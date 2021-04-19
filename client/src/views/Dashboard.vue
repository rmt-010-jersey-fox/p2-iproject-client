<template>
  <div class="container-fluid">
    <div class="row">
      <!-- sidebar left -->
      <div class="col-3 bg-white h-100">
        <!-- sidebar header -->
        <div class="row sidebar-header text-white" style="height: 8vh">
          <div class="col-3 p-0">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img
                src="https://i.imgur.com/AD3MbBi.jpeg"
                alt=""
                class="rounded-circle w-50"
              />
            </div>
          </div>
          <div
            class="col-7 p-0 d-flex justify-content-start align-items-center"
          >
            <div>
              <p class="text m-0">@Username</p>
            </div>
          </div>
          <div
            class="col-2 p-0 d-flex justify-content-start align-items-center"
          >
            <div>
              <p class="text m-0">det</p>
            </div>
          </div>
        </div>
        <!-- category -->
        <div class="p-2">
          <button class="btn btn-outline-secondary m-0 rounded">
            messages
          </button>
        </div>
        <!-- list of messages -->
        <div class="border-bottom" style="width: 18rem">
          <div class="p-3">
            <div class="row" style="height: 5vh">
              <div class="col-3 p-0 h-100">
                <div
                  class="d-flex justify-content-start align-items-center h-100"
                >
                  <img
                    src="https://i.imgur.com/AD3MbBi.jpeg"
                    alt=""
                    class="rounded-circle w-75"
                  />
                </div>
              </div>
              <div class="col-7 p-0 d-flex align-items-center">
                <div>
                  <p class="text m-0">@yoru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-bottom" style="width: 18rem">
          <div class="p-3">
            <div class="row" style="height: 5vh">
              <div class="col-3 p-0 h-100">
                <div
                  class="d-flex justify-content-start align-items-center h-100"
                >
                  <img
                    src="https://i.imgur.com/AD3MbBi.jpeg"
                    alt=""
                    class="rounded-circle w-75"
                  />
                </div>
              </div>
              <div class="col-7 p-0 d-flex align-items-center">
                <div>
                  <p class="text m-0">@kanna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9 h-100 p-0 sidebar-right">
        <!-- card profile -->
        <div class="d-flex justify-content-center align-items-center h-100">
          <div
            class="d-flex flex-column justify-content-center align-items-center m-5 card-profile"
          >
            <img
              src="https://i.imgur.com/AD3MbBi.jpeg"
              alt=""
              class="rounded-circle border border-white border-2 w-25"
            />
            <p
              class="text text-white text-center m-3 bg-secondary"
              style="font-size: 10px"
            >
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galle."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.row {
  height: 100vh;
}
.sidebar-right {
  background-color: #77602544;
}
/* img {
			width: 40px;
			height: 40px;
		} */
.sidebar-header {
  background-image: linear-gradient(to right, #ff8800, #c8543dce);
}
.card-profile {
  background-image: url("../assets/landing-page.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 55vh;
  width: 35vh;
  border-radius: 30px;
}
</style>
