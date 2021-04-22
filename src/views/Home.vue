<template>
  <div>
      <div class="container bg-purple-100 dark:bg-gray-800 flex justify-center items-center h-screen">
          <div class="bg-white dark:bg-gray-700 w-4/5 h-4/5 rounded-3xl overflow-auto shadow-2xl flex">
              <Sidebar></Sidebar>
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Library from '../components/Library'
import Search from '../components/Search'
export default {
  name: 'Home',
  components: {
      Sidebar,
      Library,
      Search
  }
}
</script>

<style>
::-webkit-scrollbar {
    
  width: 20px;
  height: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
</style>