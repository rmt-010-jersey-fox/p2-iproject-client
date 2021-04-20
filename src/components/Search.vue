<template>
    <div class="h-full w-3/4 px-2 py-3">
        <div class="h-full p-7">
          <div class="flex justify-between items-end mb-8">
              <p class="font-extrabold text-5xl text-gray-700">Find Book</p>
              <div class="flex items-center gap-2">
              <input type="text" class="rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Find Books"/>
              <div class="bg-gradient-to-br from-fuchsia-500 to-purple-600 h-auto p-2 rounded-full text-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              </div>
          </div>
            <div class="font-bold text-2xl text-gray-700 gap-y-5">Search Results for: Harry Potter</div>
          <div class="w-full h-5/6 grid grid-cols-3 overflow-auto">

              <div class="w-full p-2 h-72">
                <div class="bg-gray-100 h-full rounded-xl shadow-lg">
                  <div class="h-4/6 overflow-hidden">
                    <img class="w-full rounded-t-lg" src="http://books.google.com/books/content?id=iQmPNDIAskUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="">
                  </div>
                  <div class="h-2/6 overflow-auto p-2">
                    <p class="text-lg font-semibold text-gray-700">Harry Potter</p>
                    <p class="text-sm italic text-gray-700">by <span class="font-semibold">J.K. Rowling</span></p>
                  </div>
                </div>
              </div>

              <div class="w-full p-2 h-72">
                <div class="bg-gray-100 h-full rounded-xl shadow-lg">
                  <div class="h-4/6 overflow-hidden">
                    <img class="w-full rounded-t-lg" src="http://books.google.com/books/content?id=iQmPNDIAskUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="">
                  </div>
                  <div class="h-2/6 overflow-auto p-2">
                    <p class="text-lg font-semibold text-gray-700">Harry Potter</p>
                    <p class="text-sm italic text-gray-700">by <span class="font-semibold">J.K. Rowling</span></p>
                  </div>
                </div>
              </div>

              <div class="w-full p-2 h-72">
                <div class="bg-gray-100 h-full rounded-xl shadow-lg">
                  <div class="h-4/6 overflow-hidden">
                    <img class="w-full rounded-t-lg" src="http://books.google.com/books/content?id=iQmPNDIAskUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="">
                  </div>
                  <div class="h-2/6 overflow-auto p-2">
                    <p class="text-lg font-semibold text-gray-700">Harry Potter</p>
                    <p class="text-sm italic text-gray-700">by <span class="font-semibold">J.K. Rowling</span></p>
                  </div>
                </div>
              </div>

              
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style>

</style>