<template>
  <div class="home">
    <!-- <span class="flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
</span> -->
    <section class="text-gray-600 body-font">
      <div class="container flex flex-wrap px-5 pt-24 mx-auto items-center">
        <div
          class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200"
        >
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            Start Write Your Daily Transactions
          </h1>
          <p class="leading-relaxed text-base">
            We're always looking to collaborate with new partners and create new
            ways to distribute our content. Request a commercial key and our
            team will be in touch to discuss your needs.
          </p>
          <div class="mt-8">
            <a
              href="#"
              class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700"
              >Write Now</a
            >
          </div>
        </div>
        <div class="flex flex-row md:w-1/2 md:pl-12">
          <div class="w-full md:w-1/3 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 class="text-sm uppercase text-gray-500 leading-tight">
                    Wallet
                  </h4>
                  <h3
                    class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                  >
                    3,682
                  </h3>
                  <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                </div>
                <div class="absolute bottom-0 inset-x-0">
                  <canvas id="chart1" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 class="text-sm uppercase text-gray-500 leading-tight">
                    Saldo
                  </h4>
                  <h3
                    class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                  >
                    11,427
                  </h3>
                  <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                </div>
                <div class="absolute bottom-0 inset-x-0">
                  <canvas id="chart2" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 class="text-sm uppercase text-gray-500 leading-tight">
                    Comments
                  </h4>
                  <h3
                    class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                  >
                    8,028
                  </h3>
                  <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                </div>
                <div class="absolute bottom-0 inset-x-0">
                  <canvas id="chart3" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            >
              News
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            The Latest Indonesian and World News Today, The Most Complete Most
            Trusted Daily News Regarding Politics, Economy, Travel, Technology,
            Automotive, Football
          </p>
        </div>
        <News></News>
      </div>
    </section>
  </div>
</template>

<script>
import News from "@/components/News"

export default {
  name: "Home",
  components: {
    News,
  },
  created() {
    this.$store.dispatch("fetchNews");
  },
};
</script>
