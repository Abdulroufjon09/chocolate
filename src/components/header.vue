<script setup>
import { ChevronDown, Instagram, TwitterIcon, Menu, X } from "lucide-vue-next";
import { ref } from "vue";
import bg from "@/assets/images/header_bg.png";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const mobileMenuOpen = ref(false);

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <div id="home">
    <nav class="flex items-center justify-between px-4 sm:px-8 pt-6 font-[Montserrat] relative ">
      <p class="font-semibold text-lg">SIMPLY CHOCOLATE</p>

      <ul class="hidden md:flex gap-6">
        <li><a class="cursor-pointer" @click="scrollTo('home')">Home</a></li>
        <li><a class="cursor-pointer" @click="scrollTo('made_section')">How it’s made?</a></li>
        <li><a class="cursor-pointer" @click="scrollTo('our_products')">Our products</a></li>
        <li><a class="cursor-pointer" @click="scrollTo('top_products')">Top sellers</a></li>
        <li><a class="cursor-pointer" @click="scrollTo('is_loved')">Chocolate is loved</a></li>
      </ul>

      <ul class="hidden md:flex gap-4 cursor-pointer">
        <li><Instagram /></li>
        <li><TwitterIcon /></li>
      </ul>

      <button class="md:hidden z-20" @click="toggleMenu">
        <component :is="mobileMenuOpen ? X : Menu" size="28" />
      </button>

      <transition name="fade">
        <div
          v-if="mobileMenuOpen"
          class="absolute top-full left-0 w-full bg-[#1E1823] text-white flex flex-col items-center gap-4 py-6 shadow-lg md:hidden z-10"
        >
          <ul class="flex flex-col gap-4 items-center w-full">
            <li>
              <a class="cursor-pointer block w-full text-center" @click="scrollTo('home'); toggleMenu()">Home</a>
            </li>
            <li>
              <a class="cursor-pointer block w-full text-center" @click="scrollTo('made_section'); toggleMenu()">How it’s made?</a>
            </li>
            <li>
              <a class="cursor-pointer block w-full text-center" @click="scrollTo('our_products'); toggleMenu()">Our products</a>
            </li>
            <li>
              <a class="cursor-pointer block w-full text-center" @click="scrollTo('top_products'); toggleMenu()">Top sellers</a>
            </li>
            <li>
              <a class="cursor-pointer block w-full text-center" @click="scrollTo('is_loved'); toggleMenu()">Chocolate is loved</a>
            </li>
          </ul>

          <div class="flex gap-4 mt-4">
            <Instagram />
            <TwitterIcon />
          </div>
        </div>
      </transition>
    </nav>

    <header class="py-8 px-4">
      <div class="relative flex justify-center">
        <img
          :src="bg"
          alt=""
          class="rounded-3xl w-full max-w-6xl min-h-[320px] object-cover"
        />

        <div
          class="absolute inset-0 flex flex-col justify-end
                 p-6 sm:p-10 lg:p-20 text-white"
        >
          <div
            class="flex flex-col lg:flex-row
                   justify-between gap-10"
          >
            <div>
              <p class="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-xl">
                Treat yourself or a loved one to our finest ingredients for a
                moment of pure delight!
              </p>

              <div class="mt-6 flex flex-col sm:flex-row gap-4">
                <RouterLink to="/buy">
                  <button
                    class="bg-orange-500 px-6 py-3 rounded-full cursor-pointer
                           hover:bg-transparent hover:border transition-colors"
                  >
                    Buy now
                  </button>
                </RouterLink>

                <button
                  @click="scrollTo('made_section')"
                  class="border px-6 py-3 rounded-full cursor-pointer
                         hover:bg-orange-500 hover:border-none transition-colors"
                >
                  How it’s made
                </button>
              </div>
            </div>

            <div class="hidden lg:flex items-end gap-3">
              <p>Scroll Down</p>
              <button
                class="bg-white text-black rounded-full cursor-pointer"
                @click="scrollTo('main')"
              >
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
