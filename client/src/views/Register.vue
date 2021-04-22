<template>
    <div id="Register" class="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
        <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
            <h1 class="font-bold text-center text-4xl text-yellow-500">LayarTancep<span class="text-blue-500">Web</span></h1>
            <form @submit.prevent="register">
            <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                <h1 class="font-bold text-xl text-center">Register your account</h1>

                <div class="flex flex-col space-y-1">
                <input type="text" v-model="email" name="email" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="email" />
                </div>

                <div class="flex flex-col space-y-1">
                <input type="password" v-model="password" name="password" id="password" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                <button type="submit" class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Daftar</button>
                <button @click.prevent="cancel" type="button" class="bg-red-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-red-700 transition-colors">Batal</button>
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
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const result = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', result)
      this.email = ''
      this.password = ''
    },
    cancel () {
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>

<style>
#Register {
    background-image: url('../assets/gambar-back1.jpg');
    background-size: cover;
}
</style>
