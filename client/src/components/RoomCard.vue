<template>
  <div class="border-bottom" style="width: 18rem">
    <div class="p-3">
      <div class="row" style="height: 5vh">
        <div class="col-3 p-0 h-100">
          <div class="d-flex justify-content-start align-items-center h-100">
            <img :src="image" alt="" class="avatar" />
          </div>
        </div>
        <div class="col-7 p-0 d-flex align-items-center">
          <div>
            <p class="text m-0">@{{ username }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCard",
  data() {
    return {
      image: "",
      username: "",
      roomId: ""
    };
  },
  computed: {}
};
</script>

<style>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
