<template>
  <div class="container">
     <div class=row>
        <!-- <Search/> -->
        <div class="col-sm-4">
            <Search/>
        </div>
        <div class="col-sm-8">
            <router-view/>
        </div>
     </div>
  </div>
</template>

<script>
import Search from '../components/Search'
import Card from '../views/Card'
export default {
    name : "Homepage",
    components : {
        Search,
        Card
    }
}
</script>

<style>

</style>