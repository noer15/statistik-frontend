<template>
  <div>
    <Header />
    <section class="m-4 mb-8 md:m-8">
      <div class="lg:flex xl:flex justify-between">
        <div class="w-full mb-4 lg:mb-0 lg:w-1/5">
          <h1 class="text-md lg:text-2xl font-semibold leading-4">
            Statistik {{ currentYear }}
          </h1>
        </div>
        <div class="bg-green-500 h-2 w-full mb-2 rounded-xl"></div>
      </div>
      <div class="text-gray-600 py-4">
        Peta Sebaran ini berdasarkan data statistik {{ currentYear }}
        <div class="py-4">
          <MapJabar />
        </div>
      </div>
    </section>
    <section class="m-4 mb-8 md:m-8">
      <div class="w-full bg-blue-600 pt-4 rounded-lg">
        <div class="items-center text-center mb-10 m-8">
          <h1 class="text-2xl text-white">Heloo</h1>
          <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            necessitatibus veniam nisi. Aliquid modi impedit ratione itaque
            odit, ex expedita quasi similique excepturi porro ipsam cum maiores,
            repudiandae assumenda id.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
          <div
            class="sm:flex-1 lg:flex-initial lg:w-1/4 border-t-4 border-green-600 rounded-t-lg rounded-tr-none bg-white mt-4 flex flex-col"
          >
            <div class="p-8 text-3xl font-bold text-center">Free</div>
            <div
              class="border-0 border-grey-light border-t border-solid text-sm"
            >
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                1 Ice Cream
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Unlimited toppings
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Analytics
              </div>
            </div>
            <div class="text-center mt-8 mb-8 mt-auto">
              <a
                href="#"
                class="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
                >Sign Up</a
              >
            </div>
          </div>
          <div
            class="flex-1 lg:flex-initial lg:w-1/4 border-t-4 border-blue-300 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg lg:z-0 flex flex-col"
          >
            <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
            <div
              class="w-full border-0 border-grey-light border-t border-solid text-sm"
            >
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                2 Ice Creams
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                25 Cones
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Unlimited toppings
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Analytics
              </div>
            </div>
            <div class="w-full text-center px-8 pt-8 text-xl mt-auto">
              $2.99
              <span class="text-grey-light italic line-through"> $4.99 </span>
            </div>
            <div class="w-full text-center mb-8 mt-auto">
              <a
                href="#"
                class="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
                >Sign Up</a
              >
            </div>
          </div>
          <div
            class="flex-1 lg:flex-initial lg:w-1/4 border-t-4 border-orange-500 rounded-t-lg rounded-tl-none bg-white mt-4 flex flex-col"
          >
            <div class="p-8 text-3xl font-bold text-center">Pro</div>
            <div
              class="border-0 border-grey-light border-t border-solid text-sm"
            >
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Unlimited Ice Creams
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Unlimited Cones
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Unlimited toppings
              </div>
              <div
                class="text-center border-0 border-grey-light border-b border-solid py-4"
              >
                Analytics
              </div>
            </div>
            <div class="text-center px-8 pt-8 text-xl mt-auto">
              $5.99
              <span class="text-grey-light italic line-through"> $9.99 </span>
            </div>
            <div class="text-center pt-8 mb-8 mt-auto">
              <a
                href="#"
                class="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
                >Sign Up</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="m-4 md:m-8">
      <div class="rounded-lg shadow-md">
        <Footer />
      </div>
    </section>
  </div>
</template>
<script>
import Footer from '~/components/Footer'
import MapJabar from '~/components/beranda/MapJabar'
import Header from '~/components/Header'
export default {
  components: {
    Header,
    MapJabar,
    Footer,
  },
  layout: 'default',
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    }
  },
}
</script>
