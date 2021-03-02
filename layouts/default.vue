<template>
  <div class="w-full bg-gray-100">
    <Navbar />
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 p-2">
      <Nuxt />
    </div>
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
* {
  font-family: 'Poppins', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
