<template>
  <div class="container-fluid">
    <div class="row">
      <!-- sidebar left -->
      <div class="col-3 bg-white h-100 shadow-lg">
        <!-- sidebar header -->
        <div
          class="row sidebar-header text-white shadow-sm"
          style="height: 8vh"
        >
          <div class="col-3 p-0">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img
                @click="profilePage(username)"
                :src="image"
                alt=""
                class="avatar btn p-0 btn-dark"
              />
            </div>
          </div>
          <div
            class="col-6 p-0 d-flex justify-content-start align-items-center"
          >
            <div>
              <p class="text m-0">@{{ username }}</p>
            </div>
          </div>
          <div
            class="col-3 p-0 d-flex justify-content-start align-items-center"
          >
            <div>
              <button
                @click.prevent="signOut"
                class="btn btn-outline-light border-0 rounded-pill"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
        <!-- category -->
        <div class="p-2">
          <button
            class="btn btn-outline-success m-0 rounded border-0 rounded-pill"
          >
            Active User
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
                    class="avatar"
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
      </div>
      <div
        class="col-9 h-100 p-0 sidebar-right d-flex justify-content-center align-items-center"
      >
        <!-- chat section -->
        <!-- card profile -->

        <router-view />
      </div>
    </div>
    <div class="live-chat">
      <button @click.prevent="liveChat" class="btn btn-primary rounded-pill">
        Live Chat
      </button>
    </div>
  </div>
</template>

<script>
// import ProfileCard from "../components/ProfileCard";
// import Chat from "../components/Chat";

export default {
  name: "Dashboard",
  data() {
    return {
      image: localStorage.avatarUrl,
      username: localStorage.username
    };
  },
  components: {},
  methods: {
    async fetchCatImage() {
      try {
        const { data } = await this.$store.dispatch("fetchCatImage");
        this.image = data.image_url;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    signOut() {
      localStorage.clear();
      this.$router.push({ name: "LandingPage" });
    },
    profilePage(username) {
      this.$router.push(`/dashboard/profile/${username}`);
    },
    liveChat() {
      this.$router.push("/dashboard/live-chat");
    }
  },
  created() {
    // this.fetchCatImage();
  }
};
</script>

<style>
.row {
  height: 100vh;
}
.sidebar-right {
  background-color: #77602544;
}
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

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.avatar-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.live-chat {
  position: absolute;
  right: 5%;
  bottom: 5%;
}
</style>
