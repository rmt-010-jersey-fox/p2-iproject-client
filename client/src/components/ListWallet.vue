<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr v-for="item in wallets" :key="item.id">
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img
              class="h-10 w-10 rounded-full"
              src="https://cdn.thewirecutter.com/wp-content/uploads/2020/02/slimwallets-lowres-1208.jpg"
              alt=""
            />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">{{ item.name }}</div>
            <!-- <div class="text-sm text-gray-500">jane.cooper@example.com</div> -->
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">{{ item.saldo }}</div>
        <!-- <div class="text-sm text-gray-500">Optimization</div> -->
      </td>
      
      <td class="px-6 py-4 whitespace-nowrap">
        <span
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
        >
          Active
        </span>
      </td>
      <!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td> -->
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900">Dive into</a>
      </td>
    </tr>

    <!-- More people... -->
  </tbody>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "ListWallet",
  computed: {
    ...mapState(['wallets'])
  }
};
</script>

<style>
</style>