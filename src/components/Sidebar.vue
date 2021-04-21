<template>
    <div class="bg-purple-200 h-full w-1/4 select-none">
        <div class="flex p-5 gap-6 items-center h-1/5">
            <img class="rounded-full bg-white p-3 w-20 shadow-lg" src="https://avatars.dicebear.com/api/bottts/aaa.svg" alt="">
            <div class="gap-3 text-gray-600">
                <p class="text-xl font-bold">{{user.firstName}} {{user.lastName}}</p>
                <p class="text-base italic">{{user.email}}</p>
            </div>
        </div>
        <div class="p-2 flex-col h-4/5">
            <div @click="changePage('Library')" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <p class="font-medium">Home</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
            <div @click="changePage('Search')" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    <p class="font-medium">My Library</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
            <div @click="changePage('Search')" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p class="font-medium">Find a Book</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
            <div @click="logout" class="cursor-pointer flex group m-3 text-gray-600 justify-between items-centerp p-3 hover:bg-white rounded-full transition duration-200">
                <div class="flex gap-3 text-xl items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current group-hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    <p class="font-medium">Logout</p>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
        logout () {
            localStorage.clear()
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