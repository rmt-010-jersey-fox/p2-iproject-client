<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-9">
          <LeftContent />
        </div>

        <div class="col-3">
          <RightContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import RightContent from "@/components/RightContent.vue";
import LeftContent from "@/components/LeftContent.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    RightContent,
    LeftContent,
  },
};
</script>
