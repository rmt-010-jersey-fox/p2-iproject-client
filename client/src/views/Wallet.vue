<template>
  <div>
    <div class="flex justify-around my-2 items-center">
      <h3 class="sm:text-2xl ml-20 font-medium title-font mb-2 text-gray-700">
        Here all your wallet
      </h3>
      <div class="mr-20 block">
        <a
          href=""
          class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-indigo-400 rounded-md hover:bg-pink-700"
          @click.prevent="addNewWallet"
          >Add New Wallet</a
        >
      </div>
    </div>
    <div
      v-show="error"
      class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <div class="flex items-center justify-center w-12 bg-yellow-400">
        <svg
          class="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
          />
        </svg>
      </div>

      <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
          <span class="font-semibold text-yellow-400 dark:text-yellow-300"
            >Warning</span
          >
          <p class="text-sm text-gray-600 dark:text-gray-200">
            Please insert all input :'(
          </p>
        </div>
      </div>
    </div>
    <transition name="fade">
      <section
        v-show="showForm"
        class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <h2
          class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
        >
          Add Walet
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username"
                >Wallet Name</label
              >
              <input
                id="username"
                required
                type="text"
                v-model="name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
                >Saldo</label
              >
              <input
                id="emailAddress"
                type="number"
                v-model="saldo"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button
              class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-400"
              @click.prevent="cancel"
            >
              Cancel
            </button>
            <button
              class="ml-2 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-400 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-pink-400"
              @click.prevent="saveNewWallet"
            >
              Save
            </button>
          </div>
        </form>
        <!-- <div class="m-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Add Transactions
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Dont worry, Lorem ipsum dolor, sit amet consectetur adipisicing
                elit!
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="mt-4 space-y-4">
                    <div class="flex justify-center items-center">
                      <input
                        id="push_everything"
                        name="push_notifications"
                        type="radio"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        for="push_everything"
                        class="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Income
                      </label>

                      <input
                        id="push_email"
                        name="push_notifications"
                        type="radio"
                        class="ml-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        for="push_email"
                        class="ml-2 block text-sm font-medium text-gray-700"
                      >
                        Outcome
                      </label>
                    </div>
                  </div>
                  <div class="mt-3 grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="email_address"
                        class="block text-sm font-medium text-gray-700"
                        >Amount</label
                      >
                      <input
                        type="number"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                        >Wallet</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-700"
                        >Date</label
                      >
                      <input
                        type="date"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> -->
      </section>
    </transition>
    <div class="flex flex-col mt-4 items-center" v-show="!showForm">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Saldo
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <ListWallet></ListWallet>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListWallet from "@/components/ListWallet";
export default {
  name: "Wallet",
  data() {
    return {
      showForm: false,
      name: "",
      saldo: "",
      error: false,
    };
  },
  components: {
    ListWallet,
  },
  methods: {
    addNewWallet() {
      this.error = false;
      this.showForm = true;
    },
    cancel() {
      this.showForm = false
    },
    saveNewWallet() {
      const { name, saldo } = this;
      if (name === "" || saldo === "") {
        this.showForm = false;
        this.error = true;
        console.log("gagal");
      } else {
        this.showForm = false;
        const payload = {
          name,
          saldo,
        };
        this.name = "";
        this.saldo = "";
        this.$store.dispatch("addNewWallet", payload);
      }
    },
  },
  created() {
    this.$store.dispatch("fetchWallets");
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>