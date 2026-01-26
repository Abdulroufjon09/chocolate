<script setup>
import { ChevronDown, Instagram, TwitterIcon } from "lucide-vue-next";

import bg from "@/assets/images/header_bg.png";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div id="home">
    <nav class="flex justify-between items-center pt-6 px-8 font-[Montserrat]">
      <ul>
        <li>SIMPLY CHOCOLATE</li>
      </ul>
      <ul class="flex gap-6">
        <li><a class="cursor-pointer" @click="scrollTo('/')">Home</a></li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('made_section')"
            >How it’s made?</a
          >
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('our_products')"
            >Our products</a
          >
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('top_products')"
            >Top sellers</a
          >
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('is_loved')"
            >Chocolate is loved</a
          >
        </li>
      </ul>
      <ul class="flex gap-4 cursor-pointer">
        <li><Instagram /></li>
        <li><TwitterIcon /></li>
      </ul>
    </nav>
    <header class="py-8">
      <div class="relative flex justify-center">
        <img :src="bg" alt="" class="rounded-3xl w-full max-w-6xl" />
        <div class="absolute inset-0 flex flex-col justify-end p-20 text-white">
          <div class="flex justify-between">
            <div class="">
              <p class="text-2xl font-semibold max-w-xl">
                Treat yourself or a loved one to our finest ingredients for a
                moment of pure delight!
              </p>
              <div class="mt-6 flex gap-4">
                <RouterLink to="/buy">
                  <button
                    class="bg-orange-500 px-6 py-3 rounded-full cursor-pointer hover:bg-inherit hover:border transition-colors"
                  >
                    Buy now
                  </button>
                </RouterLink>
                <button
                  @click="scrollTo('made_section')"
                  class="border px-6 py-3 rounded-full cursor-pointer hover:bg-orange-500 hover:border-none transition-colors"
                >
                  How it’s made
                </button>
              </div>
            </div>
            <div class="flex items-end justify-center gap-3.5">
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
</style>