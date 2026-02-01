<script setup>
import { Instagram, TwitterIcon } from "lucide-vue-next";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <footer class="bg-[#1E1823] text-white px-6 sm:px-10 lg:px-14 py-12 space-y-10" id="footer">
    <div
      class="flex flex-col md:flex-row
             md:justify-between md:items-start
             gap-10"
    >
      <div class="md:w-1/5 sm:text-2xl font-semibold">
        <p>
          <span class="text-[#FD9222]">Chocolate</span>
          a delicious cure for a bad day
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-8">
        <ul class="space-y-2 text-sm sm:text-base">
          <li class="font-semibold">Contact us</li>
          <li>+380 (68) 443-94-26</li>
          <li>simplychoc@gmail.com</li>
        </ul>

        <div class="flex gap-4 items-start">
          <Instagram class="cursor-pointer" />
          <TwitterIcon class="cursor-pointer" />
        </div>
      </div>
    </div>

    <hr class="border-[#FFFFFF1A] border-t-2 w-full" />

    <nav>
      <ul
        class="flex flex-col sm:flex-row
               gap-4 sm:gap-6
               text-sm sm:text-base"
      >
        <li>
          <a class="cursor-pointer" @click="scrollTo('home')">Home</a>
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('made_section')">
            How it’s made?
          </a>
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('our_products')">
            Our products
          </a>
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('top_products')">
            Top sellers
          </a>
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('is_loved')">
            Chocolate is loved
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
</style>
