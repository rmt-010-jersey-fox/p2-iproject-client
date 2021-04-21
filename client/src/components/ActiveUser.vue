<template>
  <div class="border-bottom" style="width: 18rem">
    <div class="p-3">
      <div class="row" style="height: 5vh">
        <div class="col-3 p-0 h-100">
          <div class="d-flex justify-content-center align-items-center h-100">
            <img
              @click="profilePage"
              :src="user.avatarUrl"
              alt=""
              class="btn p-0 btn-dark avatar"
            />
          </div>
        </div>
        <div class="col-7 p-0 d-flex align-items-center">
          <div>
            <p class="text m-0">@{{ user.sender }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveUser",
  props: ["user"],
  methods: {
    profilePage() {
      this.$router
        .push(`/dashboard/profile/${this.user.sender}`)
        .catch(() => {});
      this.$store.dispatch("fetchUser", { username: this.user.sender });
    }
  }
};
</script>

<style></style>
