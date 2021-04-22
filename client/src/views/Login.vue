<template>
<!-- LOGIN -->
    <div id="Login" class="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
    <div class="flex flex-col justify-center sm:w-96 sm:m-auto max-w-md mx-5 mb-5 space-y-8">
        <h1 class="font-bold text-center text-4xl text-white">LayarTancep<span class="text-yellow-500">Web</span></h1>
        <form @submit.prevent="login">
        <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
            <h1 class="font-bold text-xl text-center">Sign in to your account</h1>

            <div class="flex flex-col space-y-1">
            <input type="email" v-model="email" name="email" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="email" />
            </div>
            <div class="flex flex-col space-y-1">
            <input v-model="password" type="password" name="password" id="password" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
            </div>

            <a @click.prevent="register" class="inline-block text-blue-500 hover:text-blue-800 hover:underline">Belum punya akun yak? yuk buat disini</a>
            <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
            <button type="submit" class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Log In</button>
            </div>
        </div>
        </form>
        <div class="flex justify-center text-gray-500 text-sm">
        <p>&copy;2021. LayarTancepWeb. Developer by abdulmajid | hacktiv8</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const result = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', result)
      this.email = ''
      this.password = ''
    },
    register () {
      console.log('MASUK SINI TAK')
      this.$router.push('/register').catch(() => {})
    }
  }
}
</script>

<style>
#Login {
    background-image: url('../assets/gambar-back1.jpg');
    background-size: cover;
}
</style>
