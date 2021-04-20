<template>
  <div>
    <div class="relative z-10">
      <div class="pl-12 pt-7">
        <p class="text-5xl font-semibold text-white">BooksClub</p>
        <p class="text-lg font-medium italic text-purple-300 p-1">Build your library</p>
      </div>
      <div class="flex justify-between w-2/3 mx-auto mt-16 space-x-24">
        <img class="w-2/6 h-auto" src="@/assets/illustration.png" alt="">
        <div class="w-4/6">
          <div class="bg-white w-full rounded-3xl h-full shadow-lg p-7">
            <p class="text-2xl font-semibold">Login</p>
         <form>
            <div class="flex-col gap-6 mt-4">
                <div>
                    <label class="text-gray-700 dark:text-gray-200">Email</label>
                    <input type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                    <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
                </div>
            </div>

            <div class="mt-6 space-y-3">
                <button @click.prevent class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none">Login</button>
                <p class="inline-block text-center w-full">Doesnt have an account yet? Register <span class="text-purple-500">here</span></p>
            </div>
        </form>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-0 bg-gray-100 h-full w-full">
        <svg class="absolute top-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8500ff" fill-opacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,245.3C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <svg class="absolute bottom-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8500ff" fill-opacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,245.3C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>
</style>