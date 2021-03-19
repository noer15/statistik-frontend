<template>
  <div class="w-full">
    <div class="flex">
      <div class="relative mr-4">
        <select
          v-model="id_kab"
          class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          @change="selectKec()"
        >
          <option :value="null" selected>Jawa Barat</option>
          <option v-for="kab in kabupaten.data" :key="kab.id" :value="kab.id">
            {{ kab.nama }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
      <div class="relative">
        <select
          v-model="id_kec"
          class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          @change="selectDesa()"
        >
          <option :value="null" selected>Pilih Kecamatan</option>
          <option v-for="kec in kecamatan.data" :key="kec.id" :value="kec.id">
            {{ kec.nama }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
    <ChartBar
      v-if="loaded"
      :data="barChartData"
      :options="barChartOptions"
      :height="300"
    />
  </div>
</template>

<script>
import ChartBar from '~/components/ChartBarBase'
export default {
  components: {
    ChartBar,
  },
  data() {
    return {
      barChartData: null,
      loaded: false,
      kabupaten: [],
      kecamatan: [],
      id_kab: null,
      id_kec: null,
    }
  },
  mounted() {
    this.dataChart()
    this.getKab()
    this.selectKec()
  },

  methods: {
    async dataChart() {
      this.loaded = false
      const response = await fetch(
        'https://f0a9e6c78074.ngrok.io/api/chartkelompoktani?kab_id=0&kec_id=0'
      )
      const data = await response.json()
      this.barChartData = data.data
      console.log('get peta wooi', data.data)
      this.loaded = true
    },
    async getKab() {
      this.kabupaten = await fetch(
        'https://f0a9e6c78074.ngrok.io/api/getkabupaten'
      ).then((res) => res.json())
    },
    async selectKec() {
      const response = await this.$axios.$get(
        '/api/chartkelompoktani?kab_id=4&kec_id=0'
      )
      const kec = await this.$axios.$get('/api/getkecamatan/' + this.id_kab)
      this.kecamatan = kec
      console.log('tampil data chart', response.data.data)
      this.barChartData = response.data.data
    },
  },
}
</script>
