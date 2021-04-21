<template>
    <div class="container">
    <br>
    <br>
    <br>
    <br>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'manga'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Manga</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1597851065532-055f97d12e47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'animals'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Animals</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'education'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Education</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'humor'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Humor</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'family'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Family</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1478061653917-455ba7f4a541?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'travel'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Travel</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'health'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Health</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRofGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
      <div class="col btn zoom mt-3" @click="$router.push({name : 'Books', params : {category:'games-and-activities'}})">
        <div class="card" style="height:40vh">
          <div class="card-header bg-light">
            <h5>Games And Activities</h5>
          </div>
          <div class="card-body"
            style="background: url(https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat;  background-position: center;background-size: cover; opacity: 0.9">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'

}
</script>


<style>
.zoom:hover {
  transform: scale(1.15);
}
</style>