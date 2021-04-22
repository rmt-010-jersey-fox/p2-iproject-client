<template>
  <div>
      <h1 class="text-center">Have a <span>Question?</span><br>Look Here</h1>
      <ul>
        <li><h2>Why only show 60 countries?</h2><span>because too many are affected around the world</span></li>
        <li><h2>Which countries are show?</h2><span>only displays countries where the positive cases is greater than 1000 and less than 10000</span></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
    color: #2073A7;
    font-weight: 600;
}

ul li{
  list-style: none;
  color: #2073A7;
  font-weight: 600;
  padding-top: 20px;
}

ul li span{
  color: #838589;
  position: relative;
  left: 20px;
  font-size: 23px;
}

ul{
  position: relative;
  padding-top: 30px;
}
</style>
