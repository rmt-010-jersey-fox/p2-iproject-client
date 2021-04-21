<template>
  <div class="border-bottom" style="width: 18rem">
    <div class="p-3">
      <div class="row" style="height: 5vh">
        <div class="col-3 p-0 h-100">
          <div class="d-flex justify-content-start align-items-center h-100">
            <img
              @click="profilePage"
              :src="room.User.avatarUrl"
              alt=""
              class="btn p-0 btn-dark avatar"
            />
          </div>
        </div>
        <div class="col-6 p-0 d-flex align-items-center">
          <div>
            <p class="text m-0" style="font-size:14px">{{ room.title }}</p>
            <p class="text m-0" style="font-size:11px">
              @{{ room.User.username }}
            </p>
          </div>
        </div>
        <div class="col-3 p-0 d-flex justify-content-end align-items-center">
          <button
            @click.prevent="joinRoom"
            class="btn p-1 border-0 btn-outline-warning"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  props: ["room"],
  computed: {},
  methods: {
    profilePage() {
      this.$router
        .push(`/dashboard/profile/${this.room.User.username}`)
        .catch(() => {});
      this.$store.dispatch("fetchUser", { username: this.room.User.username });
    },
    joinRoom() {
      this.$socket.emit("join-room", this.room.User.username);
      this.$router
        .push(`/dashboard/chat/${this.room.User.username}`)
        .catch(() => {});
    }
  }
};
</script>

<style>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
