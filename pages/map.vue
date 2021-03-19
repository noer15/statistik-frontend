<template>
  <div>
    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="panel in response.data" :key="panel">
        <div
          class="p-4 bg-white transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
        >
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <span class="text-gray-600">{{ panel.name }}</span>
              <span class="text-lg text-indigo-700 font-semibold">{{
                panel.data.total
              }}</span>
            </div>
            <div class="p-10 bg-gray-200 rounded-md"></div>
          </div>
          <div class="flex justify-between mt-2">
            <span>Data Per Bulan</span>
            <span
              class="inline-block px-2 text-sm text-white bg-green-300 rounded"
              ><span v-if="panel.data.bulan > 0">+</span>
              {{ panel.data.bulan }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="py-8">
      <div
        class="h-full p-4 bg-white transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
      >
        <Map />
      </div>
    </div>
    <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-2">
      <div
        class="p-4 bg-white transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
      >
        <ChartBar />
      </div>
      <div
        class="p-4 bg-white transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
      >
        <ChartDoughnut />
      </div>
    </div>
  </div>
</template>
<script>
import ChartBar from '@/components/ChartBar'
import ChartDoughnut from '~/components/ChartDoughnut'
import Map from '~/components/Map'
export default {
  components: {
    Map,
    ChartBar,
    ChartDoughnut,
  },
  layout: 'default',
  async asyncData({ $axios }) {
    const response = await $axios.$get('/api/dashboardpanel')
    return { response }
  },
}
</script>
