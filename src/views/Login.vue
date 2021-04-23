<template>
  <div class="bg-gray-100 h-screen dark:bg-gray-800 static">
    <div class="relative z-10">
      <div class="pl-12 pt-7">
        <p class="text-5xl font-semibold text-white dark:text-purple-400">MyBooks</p>
        <p class="text-lg font-medium italic text-purple-300 p-1 dark:text-indigo-400">Build your library</p>
      </div>
      <div class="flex justify-between w-2/3 mx-auto mt-16 space-x-24">
        <img class="w-2/6 h-auto" src="@/assets/login-illustration.png" alt="">
        <div class="w-4/6">
          <div class="bg-white dark:bg-indigo-900 w-full rounded-3xl h-full shadow-lg p-7">
            <p class="text-2xl font-semibold dark:text-purple-200">Login</p>
         <form>
            <div class="flex-col gap-6 mt-4">
                <div>
                    <label class="text-gray-700 dark:text-gray-200">Email</label>
                    <input v-model="userEmail" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                    <input v-model="userPassword" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
                </div>
            </div>

            <div class="mt-6 space-y-3">
                <button @click.prevent="login" class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none">Login</button>
                <p class="inline-block text-center w-full dark:text-purple-200">Doesnt have an account yet? Register <span @click="register" class="text-purple-500 cursor-pointer">here</span></p>
            </div>
        </form>
          </div>
        </div>
      </div>
    </div>
    <div class="top-0 absolute h-full w-full">
        <svg class="absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8500ff" fill-opacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,245.3C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8500ff" fill-opacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,245.3C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})
export default {
    name: 'Login',
    data () {
      return {
        userEmail: '',
        userPassword: ''
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login', { user: { email: this.userEmail, password: this.userPassword } })
          .then(({ data }) => {
            localStorage.setItem('access_token', data.access_token)
            Toast.fire({
              icon: 'success',
              title: `Welcome, ${data.firstName}`
            })
            this.$router.push({ name: 'Home' })
          })
          .catch(err => {
            console.log(err.response);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong :/',
              text: err.response.data.message
            })
          })
          .then(() => {
            this.userEmail = ''
            this.userPassword = ''
          })
      },
      register () {
        this.$router.push({ name: 'Register' })
      }
    }
}
</script>

<style scoped>
</style>