<script setup>
import top_1 from "@/assets/images/top_1.png";
import top_2 from "@/assets/images/top_2.png";
import top_3 from "@/assets/images/top_3.png";

let images = [top_1, top_2, top_3];
</script>

<template>
  <section class="flex flex-col items-center gap-8 px-4 sm:px-10 py-20" id="top_products">
    <p class="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
      <span class="text-[#FD9222]">TOP</span> SELLERS
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-center">
      <div v-for="(img, index) in images" :key="index" class="flex justify-center">
        <img
          :src="img"
          alt="Top product"
          class="w-56 sm:w-64 rounded-2xl shadow-2xl shadow-black object-contain"
        />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-20 max-w-5xl w-full mt-8 text-center lg:text-left">
      <p class="text-sm sm:text-base lg:w-3/5">
        Crazy enough chocolate originates from a bean just like the coffee bean
        called Cacao. Cacao has been around for thousands of years and was first
        discovered by the Native American tribe called the Mayans.
      </p>

      <RouterLink to="/buy">
        <button class="py-2 px-6 rounded-full bg-[#FD9222] text-white cursor-pointer">
          Buy now
        </button>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
</style>
