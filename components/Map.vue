<template>
  <div>
    <!-- contoh -->
    <div
      v-if="loading"
      class="animate-pulse bg-gray-400 rounded-md h-10 w-full"
    ></div>
    <div v-else class="flex justify-between">
      <div class="bg-green-600 rounded-md px-6 py-3 text-white">
        <label for="checkbox" class="cursor-pointer">GeoJSON</label>
        <input id="checkbox" v-model="show" type="checkbox" class="hidden" />
      </div>
      <div class="flex">
        <div class="relative mr-4">
          <select
            v-model="viewKecamatan"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            @change="selectKecamatan()"
          >
            <option value="all">Jawa Barat</option>
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
            v-model="viewDesa"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            @change="selectDesa()"
          >
            <option value="all">Kecamatan</option>
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
    </div>
    <br />
    <div
      v-if="loading"
      class="animate-pulse bg-gray-400 rounded-md h-screen z-20 w-full"
    ></div>
    <div v-else>
      <LMap :zoom="zoom" :center="center" style="height: 500px; width: 100%">
        <LTileLayer :url="url" :attribution="attribution" />
        <LGeoJson
          v-if="show"
          :geojson="geojson"
          :options="options"
          :options-style="styleFunction"
        />
        <LMarker :lat-lng="marker" />
      </LMap>
    </div>
  </div>
</template>
<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LGeoJson } from 'vue2-leaflet'

export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
  },

  data() {
    return {
      viewKecamatan: null,
      viewDesa: null,
      loading: false,
      kabupaten: [],
      kecamatan: [],
      desa: [],
      show: true,
      enableTooltip: true,
      zoom: 8,
      center: [-6.943097, 107.633545],
      geojson: null,
      fillColor: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(47.41322, -1.219482),
    }
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      }
    },

    styleFunction() {
      // const fillColor  = this.fillColor // important! need touch fillColor in computed for re-calculate when change fillColor
      return (feature) => {
        return {
          weight: 2,
          color: '#4caf50',
          opacity: 1,
          fillColor: feature.style.fillColor,
          fillOpacity: 0.85,
        }
      }
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {}
      }
      return (feature, layer) => {
        layer.bindTooltip(
          '<div>Kelompok Tani:' +
            feature.properties.nama +
            '</div><div>Total: ' +
            feature.properties.total +
            '</div>',

          { permanent: false, sticky: true }
        )
        this.fillColor = feature.style.fillColor
      }
    },
  },
  mounted() {
    this.getPeta()
    this.getKab()
    this.selectKecamatan()
    this.selectDesa()
  },
  methods: {
    async getPeta() {
      this.loading = true
      const response = await fetch(
        'https://f0a9e6c78074.ngrok.io/api/kelompoktani'
      )
      const data = await response.json()
      this.geojson = data
      this.loading = false
    },
    async getKab() {
      this.kabupaten = await fetch(
        'https://f0a9e6c78074.ngrok.io/api/getkabupaten'
      ).then((res) => res.json())
    },
    // api/getkecamatan/id_kabupaten
    async selectKecamatan() {
      const kecamatan = await this.$axios.$get(
        '/api/kelompoktani?kab_id=' + this.viewKecamatan + '&kec_id=0'
      )
      const response = await this.$axios.$get(
        '/api/getkecamatan/' + this.viewKecamatan
      )
      this.kecamatan = response
      console.log(kecamatan)
      this.geojson = kecamatan
    },

    async selectDesa() {
      const desa = await this.$axios.$get(
        '/api/kelompoktani?kab_id=' +
          this.viewKecamatan +
          '&kec_id=' +
          +this.viewDesa
      )
      this.desa = desa
      this.geojson = desa
      console.log(desa)
    },
  },
}
</script>
<style scoped></style>
