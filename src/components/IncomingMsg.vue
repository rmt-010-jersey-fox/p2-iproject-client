<template>
  <div class="incoming_msg">
    <div>
      <img src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff" style="height: 5%; width: 5%"/>
    </div>
    <div class="received_msg">
      <span class="time_date">{{ message.username }}</span>
      <div class="received_withd_msg mb-3">
        <p>{{ message.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>

</style>
