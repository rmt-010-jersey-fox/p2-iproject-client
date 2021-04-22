<template>
<div>
  <div v-if="message.username === username">
  <div class="media w-50 mb-3"><img :src="`https://avatars.dicebear.com/api/male/${message.username}.svg?background=%230000ff`" alt="user" width="50" class="rounded-circle">
    <div class="media-body ml-3">
      <div class="bg-light rounded py-2 px-3 mb-2">
        <p class="text-small mb-0 text-muted">{{ message.message }}</p>
      </div>
        <p class="small text-muted">{{ new Date(Date.now()) }}</p>
     </div>
    </div>
  </div>
  <div v-else>
<div class="px-4 py-5 chat-box bg-white">
  <div class="media w-50 mb-3"><img :src="`https://avatars.dicebear.com/api/male/${message.username}.svg?background=%230000ff`" alt="user" width="50" class="rounded-circle">
    <div class="media-body ml-3">
        <div class="bg-light rounded py-2 px-3 mb-2">
            <p class="text-small mb-0 text-muted">{{ message.message }}</p>
        </div>
      <p class="small text-muted">{{ new Date(Date.now()) }}</p>
    </div>
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
      username: localStorage.username
    }
  }
}
</script>

<style>

</style>
