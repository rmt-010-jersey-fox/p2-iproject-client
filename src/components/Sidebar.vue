<template>
    <div class="bg-purple-200 dark:bg-gray-600 h-full w-1/4 select-none">
        <div class="flex p-5 gap-6 items-center h-1/5">
            <img class="rounded-full bg-white dark:bg-gray-300 p-3 w-20 shadow-lg" :src="`https://avatars.dicebear.com/api/bottts/${user.firstName + ' ' + user.lastName}.svg`" alt="">
            <div class="gap-3 text-gray-600 overflow-ellipsis overflow-hidden">
                <p class="text-xl font-bold dark:text-gray-200 overflow-ellipsis overflow-hidden w-40">{{user.firstName}} {{user.lastName}}</p>
                <p class="text-base italic dark:text-gray-200 overflow-ellipsis overflow-hidden w-40">{{user.email}}</p>
            </div>
        </div>
        <div class="p-2 flex-col h-4/5 relative overflow-hidden">
            <div @click="changePage('Library')" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white dark:hover:bg-gray-700 rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <p class="font-medium  dark:text-gray-300">Home</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
            <div @click="changePage('Search')" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white dark:hover:bg-gray-700 rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p class="font-medium dark:text-gray-300">Find a Book</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
            <div @click="changePage('Recommendation')" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white dark:hover:bg-gray-700 rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <p class="font-medium dark:text-gray-300">Recommendation</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
            <div @click="logout" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white dark:hover:bg-gray-700 rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    <p class="font-medium dark:text-gray-300">Logout</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
        <Toggle class=" absolute bottom-10 left-24"></Toggle>
        </div>
    </div>
</template>

<script>
import Toggle from './Toggle'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})
export default {
    name: 'Sidebar',
    components: {
        Toggle
    },
    methods: {
        logout () {
            localStorage.clear()
            Toast.fire({
              icon: 'success',
              title: `Logged Out`
            })
            this.$router.push({ name: 'Login' })
        },
        changePage (des) {
            this.$router.push({ name: des }).catch(() => {})
        }
    },
    created () {
        this.$store.dispatch('getUserProfile')
    },
    computed: {
        user () {
            return this.$store.state.user
        }
    }
}
</script>

<style>

</style>