<template>
    <div class="h-full w-3/4 px-2 py-3">
        <div class="h-full p-7 overflow-hidden">
            <div class="flex justify-between items-center mb-8 select-none">
                <p class="font-extrabold text-5xl text-gray-700 dark:text-gray-400">Books Recommendation</p>
            </div>
            <div class="overflow-auto h-full">
                <div class="p-5 bg-purple-200 dark:bg-gray-500 rounded-2xl">
                    <Slide></Slide>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Slide from '../components/Slide'
export default {
    name: 'Recommendation',
    components: {
        Slide
    }
}
</script>

<style>

</style>