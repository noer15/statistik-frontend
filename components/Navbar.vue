<template>
  <header
    class="bg-white sticky top-0 z-10 shadow-sm"
    style="box-shadow: 0 0 20px -4px rgb(0 0 0 / 15%)"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 p-2">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="drawer()"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            class="block lg:hidden h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="px-8">
              <nav>
                <ul class="flex space-x-4">
                  <li>
                    <NuxtLink
                      to="/"
                      class="relative block py-6 px-4 lg:p-6 text-sm lg:text-lg"
                      >Beranda</NuxtLink
                    >
                  </li>

                  <li class="hoverable">
                    <a
                      class="cursor-pointer relative block py-6 px-4 lg:p-6 text-sm lg:text-lg hover:text-green-500"
                      >Data</a
                    >
                    <div
                      class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white shadow-md border"
                    >
                      <div
                        class="container mx-auto w-full flex flex-wrap justify-between mx-2"
                      >
                        <div class="w-full text-black mb-8 px-4">
                          <h2 class="font-bold text-2xl">
                            Main Hero Message for the menu section
                          </h2>
                          <p>
                            Sub-hero message, not too long and not too short.
                            Make it just right!
                          </p>
                        </div>
                        <ul
                          class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3"
                        >
                          <div class="flex items-center py-3">
                            <svg
                              class="h-4 pr-3 fill-current text-green-300"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                              />
                            </svg>
                            <NuxtLink
                              to="/kepemilikan-lahan"
                              class="text-black hover:text-green-500 text-sm"
                              >Kepemilikan Lahan</NuxtLink
                            >
                          </div>
                        </ul>
                        <ul
                          class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3"
                        >
                          <div class="flex items-center py-3">
                            <svg
                              class="h-4 pr-3 fill-current text-green-300"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                              />
                            </svg>
                            <NuxtLink
                              to="/kelompok-tani"
                              class="text-black hover:text-green-500 text-sm"
                              >Kelompok Tani</NuxtLink
                            >
                          </div>
                        </ul>
                        <ul
                          class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3"
                        >
                          <div class="flex items-center py-3">
                            <svg
                              class="h-4 pr-3 fill-current text-green-300"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
                              />
                            </svg>
                            <NuxtLink
                              to="/industri"
                              class="text-black hover:text-green-500 text-sm"
                              >Industri</NuxtLink
                            >
                          </div>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <NuxtLink
                      to="/about"
                      class="relative block py-6 px-4 lg:p-6 text-sm lg:text-lg"
                      >About</NuxtLink
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <button
            class="border-green-600 lg:border-0 border-2 lg:bg-green-400 lg:bg-gradient-to-t lg:from-green-600 py-1 lg:py-2 lg:px-8 px-6 leading-1 tracking-wider rounded-md lg:text-white text-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            Login
          </button>

          <!-- Profile dropdown -->
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <nav id="navbar-collapse">
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
          @click="isOpen = false"
        >
          <div class="mt-20 absolute inset-0 bg-black opacity-50"></div>
        </div>
      </transition>
      <aside
        class="transform top-10 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        style="
          z-index: 9999;
          box-shadow: inset rgb(0 0 0 / 12%) 0px 0px 7px -1px;
        "
      >
        <ul class="mt-2">
          <li>
            <NuxtLink
              to="/"
              class="text-gray-600 relative block py-3 px-4 lg:p-6 text-lg lg:text-base"
              >Beranda</NuxtLink
            >
          </li>
          <div class="relative">
            <button
              class="flex flex-row items-center w-full relative py-3 px-4 lg:p-6 text-lg lg:text-base text-left focus:outline-none"
              @click="dropdown()"
            >
              <span class="text-gray-600">Data</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                :class="{ 'rotate-180': open, 'rotate-0': !open }"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div v-show="open" class="px-2 py-2 bg-white">
              <NuxtLink
                to="kelompok-tani"
                class="text-gray-600 relative block py-3 px-4 lg:p-6 text-md lg:text-base"
                >Kelompok Tani</NuxtLink
              >
              <NuxtLink
                to="/kepemilikan-lahan"
                class="text-gray-600 relative block py-3 px-4 lg:p-6 text-md lg:text-base"
                >Kepemilikan Lahan</NuxtLink
              >
              <NuxtLink
                to="/industri"
                class="text-gray-600 relative block py-3 px-4 lg:p-6 text-md lg:text-base"
                >Industri</NuxtLink
              >
            </div>
          </div>
          <li>
            <NuxtLink
              to="/about"
              class="relative block py-6 px-4 lg:p-6 text-sm lg:text-lg"
              >About</NuxtLink
            >
          </li>
        </ul>
        <div class="fixed bottom-0 w-full">
          <a
            rel="noopener"
            class="flex items-center p-4 bg-orange-700 text-white"
            href="https://www.buymeacoffee.com/fayazahmed"
            target="_blank"
          >
            <img
              class="mr-2 h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Buy Me Coffee"
            />
            <p>
              <span class="font-bold">Buy me a Coffee</span>
              <br />
              <span class="text-sm text-white"
                >Help me keep this site alive</span
              >
            </p>
          </a>
        </div>
      </aside>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      open: false,
    }
  },
  watch: {
    $route() {
      this.isOpen = false
    },
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },

    dropdown() {
      this.open = !this.open
    },
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: #2f855b;
  border-bottom: 3px solid #2f855b;
  bottom: -2px;
}

/* hoverable */
.mega-menu {
  display: none;
  left: 0;
  position: fixed;
  text-align: left;
  width: 100%;
}
.hoverable {
  position: static;
}

.hoverable:hover .mega-menu {
  display: block;
}

@media only screen and (max-width: 768px) {
  .nuxt-link-exact-active {
    color: #2f855b;
    border-bottom: none !important;
  }
}
</style>
