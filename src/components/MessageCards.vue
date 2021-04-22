<template>
<div>
  <div v-if="message.username === username">
  <div class="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
    <div class="media-body ml-3">
      <div class="bg-light rounded py-2 px-3 mb-2">
        <p class="text-small mb-0 text-muted">{{ message.message }}</p>
      </div>
        <p class="small text-muted">12:00 PM | Aug 13</p>
     </div>
    </div>
  </div>
  <div v-else>
  <div class="media w-50 ml-auto mb-3">
    <div class="media-body">
      <div class="bg-primary rounded py-2 px-3 mb-2">
          <p class="text-small mb-0 text-white">{{ message.message }}</p>
        </div>
          <p class="small text-muted">12:00 PM | Aug 13</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      username: localStorage.getItem('username')
    }
  }

}
</script>

<style>

</style>
