<template>
  <div class="home">
    <Navbar />
    <div class="row">
            <div class="col-9">
                <RightContent />
            </div>

            <div class="col-3">
                <LeftContent />
            </div>
        </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import RightContent from '@/components/RightContent.vue'
import LeftContent from '@/components/LeftContent.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    RightContent,
    LeftContent
  }
}
</script>
