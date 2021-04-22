<template>
      <!-- Users box-->
    <div class="col-5 px-0">
      <div class="bg-white">

        <div class="bg-gray px-4 py-2 bg-light">
          <p class="h5 mb-0 py-1">Recent</p>
        </div>

        <div class="messages-box">
          <div class="list-group rounded-0">
            <a class="list-group-item list-group-item-action active text-white rounded-0">
              <div class="media"><img :src="`https://avatars.dicebear.com/api/male/${user}.svg?background=%230000ff`" alt="user" width="50" class="rounded-circle">
                <div class="media-body ml-4">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <h6 class="mb-0">{{ user }}</h6><small class="small font-weight-bold">{{ new Date().toISOString().split('T')[0] }}</small>
                  </div>
                  <p class="font-italic mb-0 text-small">User</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style>

</style>
