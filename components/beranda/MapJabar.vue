<template>
  <div>
    <div class="rounded-lg z-20">
      <LMap
        :zoom="zoom"
        :center="center"
        style="height: 400px; width: 100%; border-radius: 8px; z-index: 9"
      >
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
          color: '#ffb01f',
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
  },
  methods: {
    async getPeta() {
      this.loading = true
      const response = await fetch(
        'https://f0a9e6c78074.ngrok.io/api/kelompoktani?kab_id=0&kec_id=0'
      )
      const data = await response.json()
      this.geojson = data
      this.loading = false
    },
  },
}
</script>
<style scoped></style>
