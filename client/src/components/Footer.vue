<template>
  <div class="footer">
      <HFooter />
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv-footer'
export default {
  name: 'Footer',
  components: {
    HFooter
  }
}
</script>

<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
</style>
