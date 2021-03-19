<template>
  <div class="w-full bg-gray-100">
    <Navbar />
    <div style="visibility: hidden"></div>
    <section class="m-4 mb-8 md:m-8">
      <Nuxt />
    </section>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>
<style scoped>
body {
  margin: 0;
  background: #f7fafc !important;
}
</style>
