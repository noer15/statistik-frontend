<template>
  <div class="bg-orange-300 rounded-lg p-8">
    <div
      class="max-w-4xl mx-auto flex flex-row flex-wrap justify-center items-center text-base"
    >
      <a href="https://www.kitabisa.com/" target="_blank"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Fkitabisa-logo.png?alt=media&amp;token=944f9481-8a40-4bdc-9206-1b7c386d3110"
          alt="Kitabisa"
          class="cursor-pointer hover:opacity-50 object-contain object-center w-32 mx-4 mb-8"
          style="height: 2.5em" /></a
      ><a href="https://www.indorelawan.org/" target="_blank"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Findorelawan_logo%20polos_png.png?alt=media&amp;token=410794f8-a71a-4026-9ba0-5176fc828e1b"
          alt="Indorelawan"
          class="cursor-pointer hover:opacity-50 object-contain object-center w-32 mx-4 mb-8"
          style="height: 2.5em" /></a
      ><a href="https://aws.amazon.com/id/" target="_blank"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2FAmazon_Web_Services_Logo.png?alt=media&amp;token=f03f455b-e5a1-4c26-98fb-993dd3151698"
          alt="AWS"
          class="cursor-pointer hover:opacity-50 object-contain object-center w-32 mx-4 mb-8"
          style="height: 2.5em" /></a
      ><a href="http://ipspi-indonesia.com/dpd/wilayah/32" target="_blank"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2FIPSPI.jpg?alt=media&amp;token=b6c0f025-8586-42f8-b2ca-5cdf6646b394"
          alt="IPSPI"
          class="cursor-pointer hover:opacity-50 object-contain object-center w-32 mx-4 mb-8"
          style="height: 2.5em" /></a
      ><a href="https://laporcovid19.org/" target="_blank"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Flaporcovid19.png?alt=media&amp;token=54989efc-a16c-42d2-b03f-2343147937d3"
          alt="Lapor Covid-19"
          class="cursor-pointer hover:opacity-50 object-contain object-center w-32 mx-4 mb-8"
          style="height: 2.5em"
      /></a>
    </div>
    <div class="text-center mb-8 text-xl">
      Dishut Jabar - Statistik - {{ currentYear }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    }
  },
}
</script>
