<template>
  <div>
    <div>
      <div v-if="loading" class="bg-gray-400 p-2 w-full animate-pulse">
        Loading...
      </div>
      <div v-else class="flex space-x-4">
        <button
          class="rounded-md bg-gray-700 cursor-pointer px-4 py-2 focus:outline-none text-white"
        >
          <label class="cursor-pointer" for="checkbox">GeoJSON</label>
          <input
            id="checkbox"
            v-model="show"
            type="checkbox"
            class="hidden cursor-pointer"
          />
        </button>

        <div>
          <input v-model="fillColor" type="color" />
        </div>
      </div>
      <br />
    </div>
    <div
      v-if="geojson == null"
      class="bg-gray-400 p-2 w-full animate-pulse"
      style="height: 550px"
    ></div>
    <div v-else>
      <l-map :zoom="zoom" :center="center" style="height: 550px; width: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-geo-json
          v-if="show"
          :geojson="geojson"
          :options="options"
          :options-style="styleFunction"
        />
        <l-marker :lat-lng="marker" />
      </l-map>
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
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 8,
      center: [48, -1.219482],
      geojson: null,
      fillColor: '#e4ce7f',
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
      const fillColor = this.fillColor // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: '#ECEFF1',
          opacity: 1,
          fillColor,
          fillOpacity: 1,
        }
      }
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {}
      }
      return (feature, layer) => {
        layer.bindTooltip(
          '<div>code:' +
            feature.properties.code +
            '</div><div>nom: ' +
            feature.properties.nom +
            '</div>',
          { permanent: false, sticky: true }
        )
      }
    },
  },
  mounted() {
    this.created()
  },
  methods: {
    async created() {
      this.loading = true
      const response = await fetch(
        'https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson'
      )
      const data = await response.json()
      this.geojson = data
      this.loading = false
    },
  },
}
</script>

<style scoped>
input[type='color'] {
  -webkit-appearance: none;
  border: none;
  width: 32px;
  height: 32px;
  left: 60px;
  position: absolute;
  margin-top: 140px;
  z-index: 99999;
}
@media only screen and (max-width: 760px) {
  input[type='color'] {
    left: 37px;
  }
}
</style>
